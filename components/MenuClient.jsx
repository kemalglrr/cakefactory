"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Cake,
  Clock,
  Coffee,
  Croissant,
  Instagram,
  Phone,
  Utensils,
} from "lucide-react";
import { CATEGORIES } from "../lib/menu-data";
import Reveal from "./Reveal";

const ICONS = {
  croissant: Croissant,
  cake: Cake,
  utensils: Utensils,
  coffee: Coffee,
};

export default function MenuClient() {
  const [active, setActive] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, []);

  return (
    <>
      <div className="m-top">
        <div className="wrap m-top-in">
          <Link href="/" className="back">
            <ArrowLeft className="icon" />
            <span>Ana Sayfa</span>
          </Link>
          <Link href="/" className="logo">
            Cake <em>Factory</em>
          </Link>
          <a href="tel:02125830010" className="top-tel">
            <Phone className="icon" />
            <span>0212 583 00 10</span>
          </a>
        </div>
      </div>

      <header className="m-head">
        <div className="wrap">
          <span className="eyebrow">Bakırköy · Artisan Fırın &amp; Kafe</span>
          <h1>Menümüz</h1>
          <p>
            Tüm ürünlerimiz her gün taze üretilir · Ata tohumu unu &amp; doğal
            tereyağı
          </p>
        </div>
      </header>

      <nav className="cats">
        <div className="wrap cats-in">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`cat-link ${active === c.id ? "active" : ""}`}
              >
                <Icon className="icon" /> {c.name}
              </a>
            );
          })}
        </div>
      </nav>

      <main className="wrap">
        {CATEGORIES.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <section className="cat-section" id={c.id} key={c.id}>
              <div className="cat-head">
                <div className="ico">
                  <Icon size={22} />
                </div>
                <div>
                  <h2>{c.name}</h2>
                  <span>{c.sub}</span>
                </div>
              </div>
              <div className="m-grid">
                {c.items.map((it) => (
                  <Reveal className="card" key={it.n}>
                    <div className="ph">
                      <img src={it.img} alt={it.n} loading="lazy" />
                    </div>
                    <div className="bd">
                      <h3>{it.n}</h3>
                      <p>{it.d}</p>
                      <div className="row">
                        <span className="price">{it.p}</span>
                        {it.badge && <span className="badge">{it.badge}</span>}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <p className="m-note">
        * Fiyatlar temsilidir — gerçek menü verisiyle güncellenecektir.
        Fotoğraflar temsilidir; mekanın kendi ürün çekimleriyle
        değiştirilecektir.
      </p>

      <footer className="footer" style={{ marginTop: 40, padding: "40px 0" }}>
        <div className="wrap f-grid">
          <Link href="/" className="logo">
            Cake <em>Factory</em>
          </Link>
          <div className="f-links">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Clock className="icon" /> Her gün 08:30 – 23:00
            </span>
            <a
              href="https://www.instagram.com/cakefactoryistanbul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="icon" /> @cakefactoryistanbul
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
