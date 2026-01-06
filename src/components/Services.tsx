import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brush } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.services.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
              className="group rounded-xl border border-border bg-background p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Brush className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
