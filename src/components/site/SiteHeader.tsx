import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import * as simpleIcons from "simple-icons";
import {
  ArrowRight,
  ChevronDown,
  CircleUserRound,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  X,
} from "lucide-react";
import logoAsset from "@/assets/steering-squad-logo.avif.asset.json";
import { ProductPagesMenu } from "@/components/product-pages/ProductPagesMenu";

const brands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Lamborghini", "Ferrari", "Tesla", "Ford", "Chevrolet", "Dodge", "Jeep", "Toyota", "Lexus", "Honda", "Nissan", "Subaru", "Volkswagen", "Land Rover", "Range Rover", "Bentley", "Aston Martin", "McLaren", "Maserati", "Cadillac", "GMC", "Hyundai", "Kia"];
const brandIconKeys: Record<string, keyof typeof simpleIcons> = {
  BMW: "siBmw", Audi: "siAudi", Porsche: "siPorsche", Lamborghini: "siLamborghini",
  Ferrari: "siFerrari", Tesla: "siTesla", Ford: "siFord", Chevrolet: "siChevrolet",
  Jeep: "siJeep", Toyota: "siToyota", Honda: "siHonda", Nissan: "siNissan",
  Subaru: "siSubaru", Volkswagen: "siVolkswagen", Bentley: "siBentley",
  "Aston Martin": "siAstonmartin", McLaren: "siMclaren", Maserati: "siMaserati",
  Cadillac: "siCadillac", Hyundai: "siHyundai", Kia: "siKia",
};

export function Logo() {
  return <Link to="/" className="logo" aria-label="Steering Squad home"><img src={logoAsset.url} alt="Steering Squad" width={220} height={51} /></Link>;
}

/** Section link: stays on the homepage, or routes back to the homepage section from other pages. */
function SectionLink({ home, hash, className, onNavigate, children }: { home: boolean; hash: string; className?: string; onNavigate?: () => void; children: ReactNode }) {
  if (home) return <a href={`#${hash}`} className={className} onClick={onNavigate}>{children}</a>;
  return <Link to="/" hash={hash} className={className} onClick={onNavigate}>{children}</Link>;
}

/** Site-wide header: announcement bar, primary nav, mega menu, mobile nav and theme toggle. */
export function SiteHeader({ home = false, onBrandSelect }: { home?: boolean; onBrandSelect?: (brand: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("steering-squad-theme");
    const initialTheme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset["theme"] = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset["theme"] === "light" ? "dark" : "light";
    document.documentElement.dataset["theme"] = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("steering-squad-theme", nextTheme);
  }

  const sectionLinks: [string, string][] = [["builds", "Shop"], ["customize", "Custom Build"], ["gallery", "Gallery"], ["process", "How It Works"], ["craft", "About Us"]];

  return (
    <>
      <div className="announcement">GLOBAL SHIPPING AVAILABLE <span /> BUILT TO ORDER <span /> CUSTOMIZED FOR YOUR VEHICLE</div>
      <header className={`site-header ${scrolled ? "site-header-compact" : ""}`} onMouseLeave={() => setMegaOpen(false)}>
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button className={`nav-link ${megaOpen ? "nav-link-active" : ""}`} onMouseEnter={() => setMegaOpen(true)} onFocus={() => setMegaOpen(true)} onClick={() => setMegaOpen((v) => !v)} aria-expanded={megaOpen}>Find Your Vehicle <ChevronDown size={14} /></button>
            {sectionLinks.map(([hash, label]) => <SectionLink key={hash} home={home} hash={hash}>{label}</SectionLink>)}
            <ProductPagesMenu />
          </nav>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme" title="Toggle light and dark theme">
              <Sun className="theme-icon-light" size={18} /><Moon className="theme-icon-dark" size={18} />
            </button>
            <button className="icon-button" aria-label="Search"><Search size={18} /></button>
            <button className="icon-button desktop-only" aria-label="Account"><CircleUserRound size={18} /></button>
            <button className="icon-button" aria-label="Cart"><ShoppingBag size={18} /></button>
            <SectionLink home={home} hash="vehicle-finder" className="button button-primary nav-cta">Build Your Steering Wheel</SectionLink>
            <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {megaOpen && <div className="mega-menu" onMouseEnter={() => setMegaOpen(true)}>
          <div className="mega-intro"><p className="eyebrow">Find your fitment</p><h3>Choose your<br />vehicle brand.</h3><p>Select your manufacturer to begin a vehicle-matched build.</p><SectionLink home={home} hash="vehicle-finder" onNavigate={() => setMegaOpen(false)}>Use guided finder <ArrowRight size={15} /></SectionLink></div>
          <div className="mega-brand-area"><div className="mega-brand-heading"><span>POPULAR VEHICLE BRANDS</span><SectionLink home={home} hash="brands" onNavigate={() => setMegaOpen(false)}>View all brands <ArrowRight size={14} /></SectionLink></div>
            <div className="mega-brands">{brands.slice(0, 20).map((brand) => {
              const iconKey = brandIconKeys[brand];
              const icon = iconKey ? simpleIcons[iconKey] : undefined;
              const mark = <span className="brand-mark" aria-hidden="true">{icon && typeof icon === "object" && "path" in icon ? <svg viewBox="0 0 24 24"><path d={String(icon.path)} /></svg> : <b>{brand.split(/[ -]/).map((word) => word[0]).join("").slice(0, 2)}</b>}</span>;
              return home ? (
                <a key={brand} href="#vehicle-finder" onClick={() => { onBrandSelect?.(brand); setMegaOpen(false); }}>{mark}<span>{brand}</span></a>
              ) : (
                <Link key={brand} to="/" hash="vehicle-finder" onClick={() => setMegaOpen(false)}>{mark}<span>{brand}</span></Link>
              );
            })}</div>
          </div>
        </div>}
        {mobileOpen && <nav className="mobile-nav">
          <SectionLink home={home} hash="vehicle-finder" onNavigate={() => setMobileOpen(false)}>Find Your Vehicle</SectionLink>
          {sectionLinks.map(([hash, label]) => <SectionLink key={hash} home={home} hash={hash} onNavigate={() => setMobileOpen(false)}>{label}</SectionLink>)}
          <ProductPagesMenu onNavigate={() => setMobileOpen(false)} />
        </nav>}
      </header>
    </>
  );
}
