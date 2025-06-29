# 🚀 Oğulcan Kacar - Portfolio Website

Bu porftolyo websitesi, modern react teknolojileri kullanılarak geliştirilmiş, responsive tasarıma sahip bir web sitesidir. Yazılım geliştirme yolculuğum, projelerim ve iletişim bilgilerimi içerir.


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

## 📸 Ekran Görüntüsü

![Portfolio Önizleme](./public/images/screenshots/home.png)

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

---

🌟 **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

*Bu portfolio, sürekli gelişim halindedir ve yeni projeler eklenmektedir.*
