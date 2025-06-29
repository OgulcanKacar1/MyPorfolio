# Proje Tanıtım Videoları Rehberi

## 📁 Klasör Yapısı

Tanıtım videoları şu konumda saklanır:
```
public/
└── videos/
    └── projects/
        ├── my-portfolio.mp4
        ├── task-manager.mp4
        ├── weather-app.mp4
        ├── blog-platform.mp4
        └── ... (diğer proje videoları)
```

## 🎬 Video Gereksinimleri

### Önerilen Özellikler:
- **Format:** MP4 (H.264 kodek)
- **Çözünürlük:** 1920x1080 (Full HD) veya 1280x720 (HD)
- **Süre:** 30-90 saniye
- **Boyut:** 5-20 MB (optimize edilmiş)
- **FPS:** 30 veya 60

### Dosya Adlandırma:
- Küçük harflerle
- Boşluk yerine tire (-) kullanın
- Türkçe karakter kullanmayın
- .mp4 uzantısı

**Örnekler:**
- ✅ `my-portfolio.mp4`
- ✅ `task-manager.mp4` 
- ✅ `weather-app.mp4`
- ❌ `Portfolio Web Sitesi.mp4`
- ❌ `görev-yönetimi.mov`

## 📝 Projects.js'te Kullanım

```javascript
{
    id: 1,
    title: "Proje Adı",
    description: "Proje açıklaması...",
    image: "/images/projects/proje-adi.jpg",
    videoUrl: "/videos/projects/proje-adi.mp4", // Bu path'i kullanın
    technologies: ["React", "Node.js"],
    category: "fullstack",
    githubLink: "https://github.com/username/repo",
    status: "completed"
}
```

## 🔄 Yeni Video Ekleme Adımları

1. **Videoyu hazırlayın** (30-90 saniye, MP4 format)
2. **Sıkıştırın** (5-20 MB boyut)
3. **Kaydedin:** `public/videos/projects/` klasörüne
4. **Projects.js'i güncelleyin:** Video path'ini ekleyin
5. **Test edin:** Tarayıcıda video açılmasını kontrol edin

## 🎥 Video İçeriği Önerileri

### Ekran Kaydı İçeriği:
- **Giriş (5 sn):** Uygulama açılışı
- **Ana özellikler (20-60 sn):** Temel fonksiyonları gösterin
- **Etkileşimler:** Butonlara tıklama, form doldurma
- **Responsive:** Mobil görünümü
- **Sonuç (5 sn):** Final ekranı

### Yapılacaklar:
✅ Smooth fare hareketleri
✅ Yavaş ve net geçişler
✅ Tüm önemli özellikleri göster
✅ Ses kullanıyorsanız net olsun

### Yapılmaması Gerekenler:
❌ Çok hızlı geçişler
❌ Gereksiz uzun bekleme
❌ Hatalı kullanım
❌ Kalitesiz kayıt

## 🛠️ Video Düzenleme Araçları

### Ücretsiz:
- **CapCut** - Kolay kullanım, mobil/desktop
- **DaVinci Resolve** - Profesyonel özellikler
- **OpenShot** - Basit editör
- **ScreenPal** - Ekran kaydı + editör

### Ücretli:
- **Camtasia** - Ekran kaydı uzmanı
- **Adobe Premiere** - Profesyonel editör
- **Final Cut Pro** - Mac için
- **Filmora** - Kullanıcı dostu

## 📊 Video Optimizasyon

### Sıkıştırma Araçları:
- **HandBrake** - Ücretsiz video sıkıştırma
- **FFmpeg** - Komut satırı aracı
- **CloudConvert** - Online dönüştürücü
- **Compressor.io** - Online sıkıştırma

### Optimizasyon Ayarları:
```
Format: MP4
Codec: H.264
Bitrate: 1-3 Mbps
Audio: AAC, 128kbps
```

## 🎯 Video Modal Özellikleri

### Kullanıcı Deneyimi:
- ✅ **Otomatik başlama** - Video açılınca başlar
- ✅ **Sesli başlama** - Muted ile başlar (tarayıcı politikası)
- ✅ **Loop** - Video sürekli döner
- ✅ **Kontroller** - Play/pause, ses, tam ekran
- ✅ **Responsive** - Mobilde de çalışır

### Klavye Kısayolları:
- **ESC** - Modal'ı kapat
- **Space** - Video oynat/durdur
- **F** - Tam ekran
- **M** - Sesi aç/kapat

## 💡 İpuçları

1. **Boyut önemli:** Büyük videolar yavaş yüklenecek
2. **Format seçimi:** MP4 en uyumlu format
3. **Kalite/Boyut dengeleme:** 720p genelde yeterli
4. **Test edin:** Farklı cihazlarda test edin
5. **Fallback:** Video yoksa placeholder gösterin

## 🚀 Gelişmiş Özellikler

### Thumbnail Önizleme:
```javascript
// Video için poster image ekleyebilirsiniz
<video poster="/images/projects/video-thumbnail.jpg">
```

### Çoklu Format Desteği:
```javascript
// Farklı formatlar için
videoFormats: [
    "/videos/projects/project.mp4",
    "/videos/projects/project.webm"
]
```
