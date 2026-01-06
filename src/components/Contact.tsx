import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 763 57 98",
      href: "tel:+41797635798",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "niederejulien@hotmail.com",
      href: "mailto:niederejulien@hotmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Chemin des Plantes 26, 2520 La Neuveville",
      href: "https://maps.google.com/?q=Chemin+des+Plantes+26,+2520+La+Neuveville",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.contact.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-xl border border-border bg-background p-6 shadow-soft hover:shadow-medium hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <Button asChild size="lg" className="w-full">
              <a href="tel:+41797635798">
                <Phone className="h-5 w-5 mr-2" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium border border-border h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.4394516567963!2d7.099186!3d47.0656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791e39e3e3e3e3d%3A0x1234567890abcdef!2sEntreprise%20de%20peinture%20Niederer!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
