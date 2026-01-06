import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Schedule: Mon-Fri: 07:30-12:00 and 13:30-17:30, Sat: closed, Sun: closed
  // For display, we'll show compact format
  const schedule = [
    { hours: "07:30 - 12:00 / 13:30 - 17:30" }, // Monday
    { hours: "07:30 - 12:00 / 13:30 - 17:30" }, // Tuesday
    { hours: "07:30 - 12:00 / 13:30 - 17:30" }, // Wednesday
    { hours: "07:30 - 12:00 / 13:30 - 17:30" }, // Thursday
    { hours: "07:30 - 12:00 / 13:30 - 17:30" }, // Friday
    { hours: t.hours.closed }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const daysArray = t.hours.days as string[];

  return (
    <section id="horaires" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.hours.label}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              {t.hours.title}
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-background shadow-medium overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className={`px-6 py-4 flex items-center justify-between transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`font-medium ${
                          isToday ? "text-primary font-semibold" : "text-foreground"
                        }`}
                      >
                        {daysArray[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-right text-sm ${
                        isClosed ? "text-muted-foreground italic" : "font-semibold text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
