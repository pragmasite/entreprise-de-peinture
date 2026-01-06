import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold text-primary">
                Niederer
              </span>
              <span className="text-xs tracking-widest text-muted-foreground font-medium">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#a-propos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#horaires"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.nav.contact}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41797635798"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +41 79 763 57 98
                </a>
              </li>
              <li>
                <a
                  href="mailto:niederejulien@hotmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  niederejulien@hotmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Chemin des Plantes 26
                <br />
                2520 La Neuveville
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.nav.hours}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium">{t.hours.days[0]}-{t.hours.days[4]}</span>
                <br />
                07:30 - 12:00 / 13:30 - 17:30
              </li>
              <li>
                <span className="font-medium">{t.hours.days[5]}-{t.hours.days[6]}</span>
                <br />
                {t.hours.closed}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Entreprise de peinture Niederer. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
