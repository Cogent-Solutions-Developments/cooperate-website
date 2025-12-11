import { motion } from "framer-motion";
import { Search, Target, CheckCircle, Users, CalendarDays } from "lucide-react";

export default function HowWeOperateAppwriteStyleFixedSize() {
  const cogentBlue = "#1D309D"; 
  const neutralBlack = "#1A1A1A"; 
  const darkGray = "#4A5568";    
  const dividerGray = "#E0E4EB";   

  const steps = [
    {
      num: "01",
      title: "Strategic Research & Content",
      desc: "We conduct in-depth market research to develop bespoke content strategies, ensuring your value proposition profoundly resonates with your target audience.",
icon: <Search className="w-7 h-7 sm:w-5 sm:h-5" style={{ color: cogentBlue }} />,
    },
    {
      num: "02",
      title: "Precision Prospect Identification",
      desc: "Our rigorous process identifies and vets prospects, ensuring a precise alignment with your product and service offerings for optimal engagement.",
icon: <Target className="w-7 h-7 sm:w-5 sm:h-5" style={{ color: cogentBlue }} />,
    },
    {
      num: "03",
      title: "Qualified Attendee Vetting",
      desc: "Attendees undergo a thorough pre-qualification process based on your explicit criteria, guaranteeing the highest relevance and fit for your events.",
icon: <CheckCircle className="w-7 h-7 sm:w-5 sm:h-5" style={{ color: cogentBlue }} />,
    },
    {
      num: "04",
      title: "Confirmed Engagement & Outreach",
      desc: "We meticulously confirm the participation of all pre-qualified individuals, employing robust parameters to secure their attendance effectively.",
icon: <Users className="w-7 h-7 sm:w-5 sm:h-5" style={{ color: cogentBlue }} />,
    },
    {
      num: "05",
      title: "Optimized Event Orchestration",
      desc: "Every event is meticulously organized and executed for your pre-qualified audience, maximizing impact and fostering productive interactions.",
icon: <CalendarDays className="w-7 h-7 sm:w-5 sm:h-5" style={{ color: cogentBlue }} />,
    },
  ];

  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight" style={{ color: neutralBlack }}>
          The Strategy <br />
          <span style={{ color: cogentBlue }}>Behind Our Results</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base lg:text-lg md:text-xl mt-6 max-w-3xl leading-relaxed" style={{ color: darkGray }}>
          Our Value Proposition Entails A Comprehensive Five-Step Approach Aimed At Maximizing The Impact Of Your Investment
        </p>

        {/* Grid Container with subtle dividers */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-px gap-y-px
            mt-24 border-t border-l
          `}
          style={{ borderColor: dividerGray }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`
                flex flex-col items-start p-8 bg-white
                border-b border-r min-h-[220px] lg:min-h-[250px]
              `}
              style={{ borderColor: dividerGray }}
            >
              {/* Icon & Title Row */}
              <div className="flex items-center mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold ml-3" style={{ color: neutralBlack }}>
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed" style={{ color: darkGray }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}