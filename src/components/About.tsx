import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="a-propos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.about.label}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              {t.about.title1} <span className="text-primary">{t.about.title2}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg max-w-none mb-16 text-foreground"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16"
          >
            {[
              { label: t.about.stat1, value: "25+" },
              { label: t.about.stat2, value: "100+" },
              { label: t.about.stat3, value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl bg-background p-6 text-center shadow-soft">
                <div className="font-serif text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {t.about.features.map((feature, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
