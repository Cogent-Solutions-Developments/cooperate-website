// types/meshline.d.ts
import { MaterialProps } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: MaterialProps;
    }
  }
}

export {};
