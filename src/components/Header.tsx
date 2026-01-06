import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, otherLangs, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span
            className={`font-serif text-2xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Niederer
          </span>
          <span
            className={`text-xs tracking-widest font-medium transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#a-propos"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.aboutUs}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galerie"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#horaires"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <select
              value={lang}
              onChange={(e) => {
                window.location.href = getLangPath(e.target.value as any);
              }}
              className={`text-sm font-medium bg-transparent border-0 cursor-pointer outline-none ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>

          <Button asChild className="ml-2">
            <a href="tel:+41797635798">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#a-propos"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#galerie"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#horaires"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <div className="border-t border-border pt-4 space-y-3">
              <select
                value={lang}
                onChange={(e) => {
                  window.location.href = getLangPath(e.target.value as any);
                }}
                className="block w-full text-sm font-medium bg-secondary text-foreground px-3 py-2 rounded-md cursor-pointer"
              >
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              <Button asChild className="w-full">
                <a href="tel:+41797635798">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
