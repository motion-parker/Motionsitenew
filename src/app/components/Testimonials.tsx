import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { HelpCircle } from "lucide-react";

const testimonials = [
  {
    name: "Timeline question",
    role: "Asked by most new clients",
    question: "How long until I see results?",
    content: "Most clients see initial lead changes in the first 30 days as targeting data builds. Real ROAS clarity takes 60 to 90 days. We tell you this upfront, not after you've signed."
  },
  {
    name: "Budget question",
    role: "Asked before most discovery calls",
    question: "What's the minimum ad spend to get started?",
    content: "We recommend $1,500 per month for Essentials and $3,000+ for Digital Growth. Your ad spend is always separate from our retainer and stays in your account."
  },
  {
    name: "Ownership question",
    role: "Asked by agency-burned clients",
    question: "What happens to my accounts if we part ways?",
    content: "You own everything. Ad accounts, creative assets, email lists. We build inside your accounts so you are never dependent on us to access your own data."
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Real questions. Straight answers.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The questions every service business asks before signing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="mb-6">
                <HelpCircle className="w-8 h-8" style={{ color: '#9EFF02' }} />
              </div>

              <div className="font-semibold mb-4 text-foreground">
                {testimonial.question}
              </div>

              <p className="text-lg mb-8 leading-relaxed text-foreground">
                {testimonial.content}
              </p>

              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
