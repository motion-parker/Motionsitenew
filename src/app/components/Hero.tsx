import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary">Now accepting new clients</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-none">
            <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">Motion your</span><br />
            <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">digital </span>
            <span style={{ color: '#9EFF02' }}>growth</span>
            <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"> system.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Marketing isn't a channel anymore. It's a system. Paid ads, website CRO, email and SMS automations, and AI search visibility, all built to reinforce each other and run by one team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-primary text-foreground rounded-full hover:border-primary/80 transition-all"
            >
              See Pricing
            </motion.button>
          </div>

          <div className="mt-16 text-sm text-muted-foreground">
            <p>✓ Free discovery call · ✓ No long contracts · ✓ Cancel anytime</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
