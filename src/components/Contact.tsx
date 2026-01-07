import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 91 646 13 55",
      href: "tel:+41916461355",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@fienidaniloefiglio.ch",
      href: "mailto:info@fienidaniloefiglio.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via cave di Marmo 1, 6864 Arzo, CH",
      href: "https://maps.google.com/maps?q=45.877295,8.947079",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4"
          >
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-medium hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                      {item.label}
                    </div>
                    <div className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <a href="tel:+41916461355">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-border shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.7891324548097!2d8.947079!3d45.877295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784e3a0c0000001%3A0x1234567890abcdef!2sVia%20cave%20di%20Marmo%201%2C%206864%20Arzo!5e0!3m2!1sit!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
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
