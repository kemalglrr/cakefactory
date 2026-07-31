import Link from "next/link";
import {
  ArrowRight,
  Cake,
  Check,
  Clock,
  Croissant,
  MapPin,
  Milk,
  PawPrint,
  Phone,
  Store,
  Sun,
  Trees,
  Truck,
  Wheat,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="wrap hero-in">
          <span className="eyebrow">Bakırköy · Artisan Fırın &amp; Kafe</span>
          <h1>
            Her sabah, <em>ata tohumundan</em> taze üretim
          </h1>
          <p>
            Balıkesir&apos;in dağ köylerinde ilaçsız tarımla yetiştirilen ata
            tohumu unu ve doğal tereyağı ile; kruvasandan pastaya her şey, her
            gün taze.
          </p>
          <div className="hero-btns">
            <Link href="/menu" className="btn btn-hero">
              Menüyü İncele <ArrowRight className="icon" />
            </Link>
            <a
              href="#iletisim"
              className="btn btn-outline"
              style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
            >
              Şubelerimiz
            </a>
          </div>
          <div className="hero-note">
            <span>
              <Trees className="icon" /> Ağaçlar altında bahçe
            </span>
            <span>
              <Croissant className="icon" /> Günlük taze üretim
            </span>
            <span>
              <PawPrint className="icon" /> Evcil hayvan dostu
            </span>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Neden Cake Factory?</span>
            <h2 className="h2">Doğallıktan ödün vermeyen bir mutfak</h2>
          </div>
          <div className="feat-grid">
            <Reveal className="feat">
              <div className="ico">
                <Wheat size={26} />
              </div>
              <h3>Ata Tohumu Unu</h3>
              <p>
                Ürünlerimizde Balıkesir&apos;in dağ köylerinde ilaçsız tarımla
                yetiştirilen ata tohumu buğdayından öğütülen un kullanıyoruz.
              </p>
            </Reveal>
            <Reveal className="feat">
              <div className="ico">
                <Milk size={26} />
              </div>
              <h3>Doğal Tereyağı</h3>
              <p>
                Margarin ve katkı yok. Tüm hamur işleri ve kremalarımızda
                yalnızca doğal tereyağı bulunur.
              </p>
            </Reveal>
            <Reveal className="feat">
              <div className="ico">
                <Sun size={26} />
              </div>
              <h3>Her Gün Taze</h3>
              <p>
                Vitrindeki her ürün aynı gün üretilir. Dünden kalan ürün
                satmayız — bu bir söz değil, çalışma şeklimiz.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about" id="hakkimizda" style={{ paddingBottom: 110 }}>
        <div className="wrap about-grid">
          <Reveal className="about-imgs">
            <img
              className="main"
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan fırın vitrini"
            />
            <img
              className="small"
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop"
              alt="Tereyağlı kruvasan"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Hikayemiz</span>
            <h2 className="h2">
              Bakırköy&apos;ün kalbinde, ağaçların gölgesinde
            </h2>
            <p className="lead">
              Cake Factory, Bakırköy Kartaltepe&apos;de küçük bir fırın mutfağı
              olarak doğdu. Bugün iki şubemizde, ahşap masalarımızda ve
              yeşillikler içindeki bahçemizde misafirlerimizi ağırlıyoruz.
            </p>
            <ul className="about-list">
              <li>
                <Check className="icon" />
                Kartaltepe ve İncirli olmak üzere iki şube
              </li>
              <li>
                <Check className="icon" />
                Açık havada, ağaçlar altında bahçe oturma alanı
              </li>
              <li>
                <Check className="icon" />
                Pastadan kruvasana, cheesecake&apos;ten ekşi mayalı ekmeğe geniş
                ürün yelpazesi
              </li>
              <li>
                <Check className="icon" />
                Butik pasta siparişleri: doğum günü, nişan ve özel günler
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="menu">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Menümüz</span>
            <h2 className="h2">Vitrinden masanıza</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Fotoğraflı tam menümüz ayrı sayfada — masanızdaki QR kod da sizi
              doğrudan oraya götürür.
            </p>
          </div>
          <div className="mt-grid">
            <Reveal as="div">
              <Link href="/menu#firin" className="mt-card">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
                  alt="Fırından"
                />
                <div className="ov">
                  <h3>Fırından</h3>
                  <span>
                    Kruvasan, ekşi maya, poğaça <ArrowRight className="icon" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal as="div">
              <Link href="/menu#tatli" className="mt-card">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                  alt="Tatlılar"
                />
                <div className="ov">
                  <h3>Tatlılar</h3>
                  <span>
                    Lava cake, cheesecake, crumble{" "}
                    <ArrowRight className="icon" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal as="div">
              <Link href="/menu#icecek" className="mt-card">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
                  alt="Kahve"
                />
                <div className="ov">
                  <h3>Kahve &amp; İçecek</h3>
                  <span>
                    Filtre, espresso bazlı, limonata{" "}
                    <ArrowRight className="icon" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
          <div className="menu-cta">
            <Link href="/menu" className="btn btn-hero">
              Tüm Menüyü Gör <ArrowRight className="icon" />
            </Link>
          </div>

          <Reveal className="qr-strip">
            <div>
              <h3 className="serif">Tek QR, her şey burada</h3>
              <p>
                Menü, adres, çalışma saatleri — üçüncü parti uygulama yok,
                tamamen markanıza ait tek adres.
              </p>
            </div>
            <div className="qr-box">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://cakefactory.com.tr/menu&color=4a3222&bgcolor=fffdf8"
                alt="QR menü kodu"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="b2b" id="toptan">
        <div className="wrap b2b-grid">
          <Reveal>
            <span className="eyebrow">İşletmelere Özel</span>
            <h2 className="h2">Kafeniz için toptan tatlı üretimi</h2>
            <p>
              İstanbul&apos;daki üçüncü nesil kahvecilere ve butik kafelere
              günlük taze tatlı tedariki sağlıyoruz. Cheesecake, brownie,
              kruvasan ve daha fazlası — sizin vitrininizde, bizim kalitemizle.
            </p>
            <a href="#iletisim" className="btn btn-leaf">
              Toptan Teklif Alın
            </a>
          </Reveal>
          <Reveal className="b2b-stats">
            <div className="stat">
              <Truck className="icon" />
              <b>Günlük</b>
              <span>taze üretim &amp; teslimat</span>
            </div>
            <div className="stat">
              <Milk className="icon" />
              <b>%100</b>
              <span>doğal tereyağı</span>
            </div>
            <div className="stat">
              <Cake className="icon" />
              <b>20+</b>
              <span>ürün çeşidi</span>
            </div>
            <div className="stat">
              <Store className="icon" />
              <b>2</b>
              <span>üretim noktası</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="galeri">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Galeri</span>
            <h2 className="h2">Vitrinimizden kareler</h2>
          </div>
          <Reveal className="gal-grid">
            <img
              className="tall"
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
              alt="Çikolatalı pasta"
            />
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
              alt="Kruvasan"
            />
            <img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
              alt="Tatlı"
            />
            <img
              className="tall"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
              alt="Kafe ortamı"
            />
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
              alt="Kahve"
            />
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
              alt="Ekmekler"
            />
          </Reveal>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">İletişim</span>
            <h2 className="h2">Şubelerimiz</h2>
          </div>
          <div className="loc-grid">
            <Reveal className="loc">
              <span className="tag">Kartaltepe · Bahçeli Şube</span>
              <h3>Cake Factory</h3>
              <p>
                <MapPin className="icon" />
                Kartaltepe Mah. Ülkü Sk. No:13/1, 34145 Bakırköy / İstanbul
              </p>
              <p>
                <Phone className="icon" />
                <a href="tel:02125830010">0212 583 00 10</a>
              </p>
              <p>
                <Clock className="icon" />
                Her gün 08:30 – 23:00
              </p>
              <a
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=40.9888429,28.8739229"
              >
                Yol Tarifi <ArrowRight className="icon" />
              </a>
            </Reveal>
            <Reveal className="loc">
              <span className="tag">İncirli · Cadde Şubesi</span>
              <h3>Cake Factory 2</h3>
              <p>
                <MapPin className="icon" />
                Zuhuratbaba Mah. İncirli Cd. No:47, 34147 Bakırköy / İstanbul
              </p>
              <p>
                <Phone className="icon" />
                <a href="tel:+902125703387">0212 570 33 87</a>
              </p>
              <p>
                <Clock className="icon" />
                Her gün 08:30 – 23:30
              </p>
              <a
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=40.98736019999999,28.8718711"
              >
                Yol Tarifi <ArrowRight className="icon" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
