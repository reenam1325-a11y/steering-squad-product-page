import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Instagram, ShieldCheck } from "lucide-react";
import ownerAsset from "@/assets/ludicrous-revolution.png.asset.json";
import { Logo } from "./SiteHeader";

/** Site-wide footer, identical to the homepage footer. */
export function SiteFooter({ home = false, owner = false }: { home?: boolean; owner?: boolean }) {
  const columns = [["SHOP", "Find Your Vehicle", "Shop All", "New Arrivals", "Best Sellers"], ["CUSTOM", "Build Your Steering Wheel", "Request a Custom Build", "Customization Options", "How It Works"], ["HELP", "FAQs", "Shipping", "Returns", "Warranty", "Contact"], ["COMPANY", "About Steering Squad", "Our Craft", "Gallery", "Reviews"]];
  return (
    <footer className="footer">
      <div className="footer-accent" />
      <div className="section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            {owner && (
              <div className="footer-owner">
                <span className="footer-owner-label">Steering Squad is owned and operated by</span>
                <img src={ownerAsset.url} alt="Steering Squad is owned and operated by Ludicrous Revolution" width={1514} height={391} />
              </div>
            )}
            <Logo />
            <p>Handcrafted custom steering wheels,<br />built around you.</p>
            <div className="footer-promise"><span><ShieldCheck size={15} /> Vehicle-specific fitment</span><span><Globe2 size={15} /> Worldwide builds</span></div>
            <div className="footer-social"><a href="https://instagram.com/steeringsquad" aria-label="Instagram"><Instagram size={19} /></a></div>
          </div>
          <div className="footer-links">
            {columns.map(([title, ...items], index) => (
              <div key={title}>
                <span className="footer-column-number">0{index + 1}</span>
                <h3>{title}</h3>
                {items.map((item) => {
                  const target = item === "Find Your Vehicle" || item.includes("Build") ? "vehicle-finder" : "";
                  const inner = <>{item}<ArrowRight size={11} /></>;
                  return home
                    ? <a key={item} href={target ? `#${target}` : "#top"}>{inner}</a>
                    : (target
                      ? <Link key={item} to="/" hash={target}>{inner}</Link>
                      : <Link key={item} to="/">{inner}</Link>);
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="newsletter">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h3>GET BUILD <span>INSPIRATION</span></h3>
            <p>New builds, customization ideas, and automotive inspiration.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" aria-label="Email address" placeholder="ENTER YOUR EMAIL ADDRESS" required />
            <button className="button button-primary" type="submit">Subscribe <ArrowRight size={16} /></button>
          </form>
        </div>
        <div className="footer-bottom">
          <span>© 2026 STEERING SQUAD</span>
          <div>
            {["Privacy Policy", "Terms & Conditions", "Shipping Policy", "Returns Policy"].map((item) => home
              ? <a key={item} href="#top">{item}</a>
              : <Link key={item} to="/">{item}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
