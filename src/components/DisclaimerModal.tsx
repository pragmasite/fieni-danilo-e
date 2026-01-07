import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if disclaimer has been dismissed in this session
    if (!sessionStorage.getItem("disclaimer-dismissed")) {
      // Small delay to ensure page is rendered
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("disclaimer-dismissed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="w-full max-w-md rounded-2xl bg-card p-8 shadow-medium border border-border"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <AlertTriangle className="h-8 w-8 text-accent" />
              </div>
            </div>

            <h2 className="mb-4 text-center font-serif text-2xl text-foreground">
              {t.disclaimer.title}
            </h2>

            <div className="mb-8 space-y-3 text-center">
              {t.disclaimer.items.map((item, i) => (
                <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                  • {item}
                </p>
              ))}
            </div>

            <Button
              onClick={dismiss}
              className="w-full bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              {t.disclaimer.button}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
