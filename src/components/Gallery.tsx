import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Gallery images with descriptions
  const images = [
    { src: "/images/gallery-1.jpg", alt: "Impianti idrici" },
    { src: "/images/gallery-2.jpg", alt: "Sistemi di riscaldamento" },
    { src: "/images/gallery-3.jpg", alt: "Pannelli solari" },
    { src: "/images/gallery-4.jpg", alt: "Ventilazione CMV" },
    { src: "/images/gallery-5.jpg", alt: "Impianti sanitari" },
    { src: "/images/gallery-6.jpg", alt: "Locali tecnici" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="progetti" className="py-24 bg-background" ref={ref}>
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
            {t.gallery.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4 mb-6"
          >
            {t.gallery.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.gallery.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-serif mb-2">🏗️</div>
                  <div className="text-sm font-medium">{image.alt}</div>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="text-sm">
            * Galleria di esempio - Le immagini reali verranno caricate in seguito
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
