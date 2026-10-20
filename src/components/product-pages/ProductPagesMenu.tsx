import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { productPageVersions } from "./versions";

/** Navigation dropdown listing every product page design version. */
export function ProductPagesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pp-menu" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="pp-menu-trigger" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((v) => !v)}>
        Product Pages <ChevronDown size={14} />
      </button>
      {open && (
        <div className="pp-menu-panel" role="menu">
          {productPageVersions.map((v) => (
            <Link key={v.to} to={v.to} role="menuitem" className="pp-menu-item" onClick={() => { setOpen(false); onNavigate?.(); }}>
              <b>{v.label}</b>
              <small>{v.description}</small>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
