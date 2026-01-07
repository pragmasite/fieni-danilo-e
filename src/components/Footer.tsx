import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-xl mb-2">Fieni Danilo e figlio SA</h3>
            <p className="text-sm text-white/70 mb-4">{t.footer.tagline}</p>
            <p className="text-sm text-white/60">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#chi-siamo" className="hover:text-white transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#progetti" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#orari" className="hover:text-white transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            © {currentYear} Fieni Danilo e figlio SA. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
