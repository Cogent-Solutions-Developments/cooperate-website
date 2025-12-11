/* @refresh reset */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RigidBodyProps,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import type { ThreeEvent } from '@react-three/fiber';

// === EXTENSIONS & ASSETS =====================================================
extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: object;
    meshLineMaterial: object;
  }
}

const cardGLB = '/images/lanyard/card.glb';
const lanyard = '/images/lanyard/lanyardcs1.png';

useGLTF.preload(cardGLB);
useTexture.preload(lanyard);

// === MAIN COMPONENT ==========================================================
interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 25],
  gravity = [0, -9.8, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  return (
    <div className="absolute w-full h-full pointer-events-none">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent, antialias: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0xffffff), transparent ? 0 : 1);
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />

          <Physics gravity={gravity} timeStep={1 / 60}>
            <RigidBody type="fixed" colliders="cuboid">
              <mesh position={[0, -8, 0]}>
                <boxGeometry args={[100, 1, 100]} />
                <meshBasicMaterial visible={false} />
              </mesh>
            </RigidBody>

            <Band />
          </Physics>

          <Environment blur={0.75}>
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

// === BAND (ROPE + CARD) ======================================================
function Band({ maxSpeed = 50, minSpeed = 0 }: { maxSpeed?: number; minSpeed?: number }) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef(null);
  const j1 = useRef(null);
  const j2 = useRef(null);
  const j3 = useRef(null);
  const card = useRef(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: Partial<RigidBodyProps> = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyard);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rope joints
  useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3 as any, card as any, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  // Animation
  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref: any) => ref.current?.wakeUp());
      (card.current as any)?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref: any) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy((j3.current as any).translation());
      curve.points[1].copy((j2.current as any).lerped);
      curve.points[2].copy((j1.current as any).lerped);
      curve.points[3].copy((fixed.current as any).translation());
      (band.current as any).geometry.setPoints(curve.getPoints(32));

      ang.copy((card.current as any).angvel());
      rot.copy((card.current as any).rotation());
      (card.current as any).setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const canvas = (e.target as HTMLElement).ownerDocument.querySelector('canvas');
    if (canvas) canvas.style.pointerEvents = 'auto';
    hover(true);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const canvas = (e.target as HTMLElement).ownerDocument.querySelector('canvas');
    if (canvas && !dragged) canvas.style.pointerEvents = 'none';
    hover(false);
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    drag(false);
    const canvas = (e.target as HTMLElement).ownerDocument.querySelector('canvas');
    if (canvas) canvas.style.pointerEvents = 'none';
  };

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag(new THREE.Vector3().copy(e.point).sub(vec.copy((card.current as any).translation())));
  };

  return (
    <>
      {/* Centered on mobile, offset on desktop */}
      <group position={isSmall ? [0, 4.2, 0] : [-1.8, 4.2, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={isSmall ? 1.2 : 0.8}
        />
      </mesh>
    </>
  );
}