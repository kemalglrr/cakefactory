# Cake Factory Bakırköy — Web Sitesi

Next.js ile hazırlanmış tanıtım sitesi + fotoğraflı QR menü.

## Geliştirme

```bash
npm install
npm run dev
```

http://localhost:3000 — ana sayfa, http://localhost:3000/menu — QR menü sayfası.

## Canlıya Alma (Vercel — önerilen)

1. Projeyi bir GitHub reposuna push'la.
2. vercel.com'da "New Project" → repoyu seç → Deploy. Ayar gerekmez.
3. Alan adı (ör. cakefactory.com.tr) Vercel'den Domains sekmesinde bağlanır.
4. QR kodlar `https://<alanadi>/menu` adresine yönlendirilmelidir.

## Yayın Öncesi Yapılacaklar

- [ ] Menü ürün/fiyatlarını gerçek verilerle güncelle (`lib/menu-data.js`)
- [ ] Unsplash görsellerini mekanın kendi fotoğraflarıyla değiştir (`public/` klasörüne koyup yolları güncelle)
- [ ] Toptan satış bölümünü işletme sahibiyle teyit et (kaldırmak istersen: `app/page.jsx` içindeki `#toptan` section)
- [ ] Ana sayfadaki QR görselinin hedef adresini gerçek alan adıyla güncelle
