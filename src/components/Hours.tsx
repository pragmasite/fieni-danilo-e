import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const schedule = [
    { hours: "07:30 - 12:00, 13:00 - 17:00" }, // Monday
    { hours: "07:30 - 12:00, 13:00 - 17:00" }, // Tuesday
    { hours: "07:30 - 12:00, 13:00 - 17:00" }, // Wednesday
    { hours: "07:30 - 12:00, 13:00 - 17:00" }, // Thursday
    { hours: "07:30 - 12:00, 13:00 - 17:00" }, // Friday
    { hours: t.hours.closed }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="orari" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <span
                          className={`font-medium ${
                            isToday ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs text-accent font-semibold">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`font-medium ${
                        isClosed
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
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
