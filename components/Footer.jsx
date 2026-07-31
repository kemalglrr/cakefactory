import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-grid">
          <Link href="/" className="logo">
            Cake <em>Factory</em>
          </Link>
          <div className="f-links">
            <a href="/#hakkimizda">Hakkımızda</a>
            <Link href="/menu">Menü</Link>
            <a href="/#toptan">Toptan</a>
            <a href="/#iletisim">İletişim</a>
            <a
              href="https://www.instagram.com/cakefactoryistanbul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="icon" /> Instagram
            </a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 Cake Factory Bakırköy — Tüm hakları saklıdır.</span>
          <span>Demo tasarım önizlemesidir.</span>
        </div>
      </div>
    </footer>
  );
}
