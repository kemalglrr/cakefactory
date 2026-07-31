"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo">
          Cake <em>Factory</em>
        </Link>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="/#hakkimizda" onClick={() => setOpen(false)}>Hakkımızda</a>
          <a href="/#toptan" onClick={() => setOpen(false)}>Toptan</a>
          <a href="/#galeri" onClick={() => setOpen(false)}>Galeri</a>
          <a href="/#iletisim" onClick={() => setOpen(false)}>İletişim</a>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/menu" className="btn btn-leaf nav-cta">
            <UtensilsCrossed className="icon" /> Menü
          </Link>
          <button
            className="burger"
            aria-label="Menüyü aç"
            onClick={() => setOpen(!open)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
}
