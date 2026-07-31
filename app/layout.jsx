import "./globals.css";

export const metadata = {
  title: "Cake Factory Bakırköy — Artisan Fırın & Kafe",
  description:
    "Bakırköy'de ata tohumu unu ve doğal tereyağı ile her gün taze üretim yapan artisan fırın & kafe. Kruvasan, pasta, tatlı ve kahve.",
  openGraph: {
    title: "Cake Factory Bakırköy — Artisan Fırın & Kafe",
    description:
      "Ata tohumu unu ve doğal tereyağı ile her gün taze üretim. Bakırköy'de iki şube.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
