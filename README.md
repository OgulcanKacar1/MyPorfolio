# 🚀 My Portfolio Website

Modern ve responsive kişisel portfolio website'i. Space teması ile tasarlanmış, React teknolojisi kullanılarak geliştirilmiştir.

![Portfolio Preview](./public/images/portfolio-preview.png)

## ✨ Özellikler

- 🌌 **Space Teması** - Uzay konseptli modern tasarım
- 📱 **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Smooth Animations** - Akıcı geçişler ve hover efektleri
- 💼 **Projeler Galerisi** - Filtrelenebilir proje vitrin alanı
- 🛠️ **Yetenekler Sayfası** - Progress bar'lar ile yetenek seviyesi gösterimi
- 📧 **İletişim Formu** - Direkt iletişim imkanı
- 🔍 **SEO Optimized** - Arama motorları için optimize edilmiş

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **React 18** - Modern UI framework
- **React Router** - Sayfa yönlendirmeleri
- **CSS3** - Custom styles ve animations
- **React Icons** - Profesyonel icon set

### Design & Tools
- **Figma** - UI/UX tasarım
- **Git** - Versiyon kontrolü
- **VS Code** - Development environment

## 🚀 Canlı Demo

[Portfolio Website'i Görüntüle](https://your-portfolio-url.com)

## 📸 Ekran Görüntüleri

<details>
<summary>Sayfalardan Örnekler</summary>

### Ana Sayfa
![Ana Sayfa](./public/images/screenshots/home.png)

### Projeler Sayfası
![Projeler](./public/images/screenshots/projects.png)

### Yetenekler Sayfası
![Yetenekler](./public/images/screenshots/skills.png)

</details>

## 🏃‍♂️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/ogulcankacar/my-portfolio.git
cd my-portfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Development server'ı başlatın**
```bash
npm start
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Proje resimleri
│   │   └── screenshots/       # README için ekran görüntüleri
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home/              # Ana sayfa
│   │   ├── Navbar/            # Navigasyon
│   │   ├── Projects/          # Projeler sayfası
│   │   ├── Skills/            # Yetenekler sayfası
│   │   └── Contact/           # İletişim sayfası
│   ├── App.js                 # Ana uygulama
│   └── index.js               # Entry point
└── README.md
```

## 🎨 Özelleştirme

### Kişisel Bilgileri Güncelleme

1. **Navbar'da isim değiştirme** - `src/components/Navbar/navbar.js`
2. **Ana sayfa içeriği** - `src/components/Home/Home.js`
3. **Yetenekler güncelleme** - `src/components/Skills/Skills.js`

### Yeni Proje Ekleme

```javascript
// src/components/Projects/Projects.js
{
    id: 5,
    title: "Yeni Proje",
    description: "Proje açıklaması...",
    image: "/images/projects/yeni-proje.jpg",
    technologies: ["React", "Node.js"],
    category: "fullstack",
    githubLink: "https://github.com/username/repo",
    liveLink: "https://demo.com",
    status: "completed"
}
```

### Renk Teması Değiştirme

CSS dosyalarındaki color variables'ları güncelleyin:
- Primary: `#b794f6` (Mor)
- Secondary: `#64ffda` (Turkuaz)
- Background: `linear-gradient(135deg, #000000 0%, #0a0a23 30%, #1a1a2e 70%, #000000 100%)`

## 📦 Build ve Deploy

### Production Build
```bash
npm run build
```

### Deploy Seçenekleri
- **Netlify** - Drag & drop ile kolay deploy
- **Vercel** - GitHub integration ile otomatik deploy
- **GitHub Pages** - Ücretsiz hosting
- **Firebase Hosting** - Google'ın hosting servisi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add some amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📧 İletişim

- **Email:** ogulcankacar@example.com
- **LinkedIn:** [linkedin.com/in/ogulcankacar](https://linkedin.com/in/ogulcankacar)
- **GitHub:** [github.com/ogulcankacar](https://github.com/ogulcankacar)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- React ekibine harika framework için
- React Icons topluluğuna icon seti için
- Tüm open source katkıda bulunanlara

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
