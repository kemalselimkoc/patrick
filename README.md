# 🧠 Gözlemci Zihni — Mind Training System

Patrick Jane ve Sherlock Holmes gibi bir zihne sahip olmak için kişisel eğitim platformu.

## 🚀 GitHub Pages'e Nasıl Yüklenir?

### 1. GitHub'da Yeni Repo Oluştur

- GitHub.com'a git → "New repository"
- İsim ver (örn: `mind-training`)
- **Public** seç
- README ekleme (zaten var)
- "Create repository" tıkla

### 2. Dosyaları Yükle

**Yöntem A — Tarayıcı üzerinden (kolay):**
1. Repo sayfasında "uploading an existing file" tıkla
2. Tüm dosyaları sürükle bırak:
   - `index.html`
   - `dashboard.html`
   - `modules.html`
   - `weekly.html`
   - `quiz.html`
   - `notes.html`
   - `css/style.css` (önce `css` klasörünü oluştur)
   - `js/app.js` (önce `js` klasörünü oluştur)
   - `js/content.js`
3. "Commit changes" tıkla

**Yöntem B — Git ile (önerilen):**
```bash
git init
git add .
git commit -m "İlk yükleme"
git remote add origin https://github.com/KULLANICI_ADIN/mind-training.git
git push -u origin main
```

### 3. GitHub Pages'i Aktifleştir

1. Repo → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `root`
4. Save

**5 dakika içinde siteniz hazır:**
`https://KULLANICI_ADIN.github.io/mind-training/`

---

## 📱 Özellikler

- 🔐 Şifre koruması
- 🌐 Türkçe / İngilizce dil desteği
- 📚 8 modül (Gözlem, Mikro İfadeler, Hafıza, Eleştirel Düşünce)
- 📅 8 haftalık sistematik eğitim planı
- 🎯 12 soruluk quiz sistemi
- ✍️ Not alma alanı
- 📊 İlerleme takibi
- 🔥 Streak sayacı
- 📱 Mobil uyumlu

## 🔑 Giriş Şifresi

`Senem1907-`

---

*Tüm veriler tarayıcının localStorage'ında saklanır. Her cihazda bağımsız ilerleme kaydedilir.*
