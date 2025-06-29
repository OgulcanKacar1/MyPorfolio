# 🚀 Oğulcan Kacar - Portfolio Website

Ben Oğulcan Kaçar'ın kişisel portfolio website'i. Modern React teknolojileri kullanılarak geliştirilmiş, responsive tasarıma sahip bir web sitesidir. Yazılım geliştirme yolculuğum, projelerim ve iletişim bilgilerimi içerir.

![Portfolio Preview](./public/images/portfolio-preview.png)

## ✨ Özellikler

- 🌌 **Modern Tasarım** - Temiz ve profesyonel arayüz
- 📱 **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Smooth Animations** - Akıcı geçişler ve hover efektleri
- 💼 **Projeler Galerisi** - Gerçek projelerim ve teknolojiler
- �‍🎓 **Hakkımda Sayfası** - Eğitim ve deneyimlerim, timeline
- 📧 **İletişim Sayfası** - Sosyal medya linkleri ve e-posta
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

[Portfolio Website'i Görüntüle](https://ogulcankacar-portfolio.netlify.app)

## 📸 Ekran Görüntüleri

<details>
<summary>Sayfalardan Örnekler</summary>

### Ana Sayfa
![Ana Sayfa](./public/images/screenshots/home.png)

### Hakkımda Sayfası
![Hakkımda](./public/images/screenshots/about.png)

### Projeler Sayfası
![Projeler](./public/images/screenshots/projects.png)

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
│   │   ├── About/             # Hakkımda sayfası
│   │   └── Contact/           # İletişim sayfası
│   ├── App.js                 # Ana uygulama
│   └── index.js               # Entry point
└── README.md
```

## 🎨 Özelleştirme

### Kişisel Bilgileri Güncelleme

1. **Navbar'da isim değiştirme** - `src/components/Navbar/navbar.js`
2. **Ana sayfa içeriği** - `src/components/Home/Home.js`
3. **Hakkımda sayfası** - `src/components/About/About.js`
4. **İletişim bilgileri** - `src/components/Contact/Contact.js`

### Yeni Proje Ekleme

`src/components/Projects/Projects.js` dosyasındaki `projects` dizisine yeni proje ekleyin:

```javascript
{
    id: 5,
    title: "Yeni Proje",
    description: "Proje açıklaması...",
    image: "/images/projects/yeni-proje.jpg",
    technologies: ["React", "Node.js"],
    category: "fullstack",
    githubLink: "https://github.com/ogulcankacar/repo",
    liveLink: "https://demo.com",
    status: "completed"
}
```

### Renk Teması Değiştirme

CSS dosyalarındaki ana renkler:
- **Primary:** `#4f46e5` (İndigo)
- **Secondary:** `#06b6d4` (Cyan)
- **Accent:** `#8b5cf6` (Mor)
- **Background:** Gradient tonları
- **Text:** `#ffffff` (Beyaz) ve `#e5e7eb` (Açık gri)

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

- **Email:** [ogulcankacar3@gmail.com](mailto:ogulcankacar3@gmail.com)
- **LinkedIn:** [linkedin.com/in/ogulcankacar](https://linkedin.com/in/ogulcankacar)
- **GitHub:** [github.com/ogulcankacar](https://github.com/ogulcankacar)
- **Twitter:** [@ogulcankacar](https://twitter.com/ogulcankacar)

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. 

### MIT Lisansı Nedir?
MIT Lisansı, en liberal açık kaynak lisanslarından biridir ve şunlara izin verir:
- ✅ **Ticari kullanım** - Projeyi ticari amaçlarla kullanabilirsiniz
- ✅ **Değiştirme** - Kodu değiştirebilir ve geliştirebilirsiniz  
- ✅ **Dağıtım** - Kodu yeniden dağıtabilirsiniz
- ✅ **Özel kullanım** - Kodu özel projelerinizde kullanabilirsiniz
- ⚠️ **Tek koşul** - Lisans metnini ve telif hakkını korumanız gerekir

Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- **React ekibine** harika framework için
- **React Icons topluluğuna** kapsamlı icon seti için
- **Açık kaynak topluluğuna** tüm katkılar için
- **Mentorlarıma** rehberlik için

---

🌟 **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

*Bu portfolio, sürekli gelişim halindedir ve yeni projeler eklenmektedir.*
