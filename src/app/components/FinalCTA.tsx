import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="relative p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/95 to-primary text-primary-foreground text-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: "#000000",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Now accepting clients for June 2026</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-white">
                Stop guessing.<br />Start <span style={{ color: '#9EFF02' }}>growing</span>.
              </h2>

              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                One call to find out exactly what the system looks like for your business. No pressure. Just straight talk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: '#9EFF02', color: '#0a0a0a' }}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 text-primary-foreground rounded-full transition-all backdrop-blur-sm"
                  style={{ borderColor: '#9EFF02' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#9EFF02'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#9EFF02'}
                >
                  View Packages
                </motion.button>
              </div>

              <div className="mt-10 text-sm opacity-75">
                <p>✓ Free discovery call • ✓ No long contracts • ✓ Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-sm text-muted-foreground">
        <p>© 2026 Motion Marketing. All rights reserved.</p>
      </footer>
    </section>
  );
}
