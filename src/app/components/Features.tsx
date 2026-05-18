import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    quote: "This platform completely transformed our business",
    duration: "0:42"
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, StartupX",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=600&fit=crop",
    quote: "We saw 300% growth in just 3 months",
    duration: "1:15"
  },
  {
    name: "Emily Park",
    role: "CMO, InnovateCo",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop",
    quote: "The best investment we've made this year",
    duration: "0:58"
  }
];

export function Features() {
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
            Don't take our word for it.<br />Hear it from the businesses we scale.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Three of our clients on what changed when we took over their growth systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden min-h-[500px] group cursor-pointer border-2 border-border shadow-sm"
            >
              <div className="absolute inset-0 bg-black">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              </div>

              <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                {testimonial.duration}
              </div>

              <div className="relative h-full flex flex-col justify-center items-center p-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-base mb-2 font-normal">"{testimonial.quote}"</p>
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="text-xs text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
