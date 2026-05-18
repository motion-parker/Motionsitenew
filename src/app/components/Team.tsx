import parkerImage from '@/imports/Untitled_design_-_79.PNG'
import taylorImage from '@/imports/Untitled_design_-_80-1.PNG'
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Parker Harris",
    role: "Founder & Co-Owner",
    image: taylorImage,
    zoom: 1.15,
    offsetY: 0
  },
  {
    name: "Taylor Jackson",
    role: "Co-Owner",
    image: parkerImage,
    zoom: 1.2,
    offsetY: 20
  }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Meet the team behind your growth.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people who actually care about your results.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-72 h-72 rounded-3xl overflow-hidden mb-6 border-2 border-border">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(${member.zoom}) translateY(${member.offsetY}px)` }}
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-2xl mb-2">{member.name}</div>
                <div className="text-muted-foreground text-lg">{member.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
