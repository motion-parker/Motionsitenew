import image_C612E141_E19F_432D_BE04_4B580E1F5254 from '@/imports/C612E141-E19F-432D-BE04-4B580E1F5254.PNG'
import image_32E4D126_6C97_4E13_8818_8D2C2B445A23 from '@/imports/32E4D126-6C97-4E13-8818-8D2C2B445A23.PNG'
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Numbers like these don't happen by accident.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            They happen when your ads, your website, your email follow-up, and your local search all feed each other. That's exactly what we build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-border"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10">
            <ImageWithFallback
              src={image_C612E141_E19F_432D_BE04_4B580E1F5254}
              alt="Product showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-semibold mb-2">50M+</div>
            <div className="text-muted-foreground">Digital views generated</div>
          </div>
          <div>
            <div className="text-5xl font-semibold mb-2">10K+</div>
            <div className="text-muted-foreground">Creative hours invested</div>
          </div>
          <div>
            <div className="text-5xl font-semibold mb-2">250+</div>
            <div className="text-muted-foreground">Projects delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
