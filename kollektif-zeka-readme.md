
# 🧠 Kollektif Zekâ Platformu

## 🎯 Proje Amacı
Kollektif Zekâ, farklı disiplinlerden (yazılımcı, tasarımcı, hukukçu, doktor, pazarlamacı vb.) bireylerin bir araya gelerek ticari ürün fikirlerini hayata geçirdiği, fikirlerin görünür hale geldiği ve ekiplerin oluşturulduğu bir çevrimiçi iş geliştirme platformudur.

## 🛠️ Temel Özellikler (MVP)
- **Fikir Dashboard'u**: 
  - Başlık ve açıklama ile fikir listesi
  - Tarih ve kullanıcı adı gösterimi
  - Her fikir detay sayfasına yönlendirme

- **Yorum Alanı**:
  - Her fikir altında tartışma yapılabilir
  - Katılmak isteyen kullanıcılar yorumla katkı verir

- **Proje İlerlemesi ve Notlar**:
  - Her fikir için aşama takibi (Fikir → Plan → Prototip → Test → Yayın)
  - Aşamaya özel notlar

- **Manuel Ekip Oluşturma**:
  - Fikir sahibi istediği katılımcıları davet eder
  - Rollere göre katkılar (Yazılım, Tasarım, Hukuk, vb.) listelenir

- **Topluluk Alanı (V2)**:
  - Forum/chat entegrasyonu için alan bırakılır

---

## ⚙️ Tech Stack

### 👨‍💻 Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Kit**: ShadCN UI veya Radix UI

### 🗄️ Backend & Database
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (opsiyonel kullanıcı adı veya e-posta girişi)
- **Realtime**: Supabase Realtime özellikleri

### 💬 Content & Comments
- Custom comment system using Supabase tables
- Future: Tiptap/Lexical for rich note editing

### 🚀 Deployment
- **Frontend Hosting**: Netlify
- **Backend / DB Hosting**: Supabase

### 📊 Analytics & Hata Takibi
- **Analytics**: Netlify Analytics veya Posthog
- **Error Tracking**: Sentry (opsiyonel)

---

## 🔒 Güvenlik & Mülkiyet
- Fikir sahipliği korunur
- Her fikirde katkıda bulunanlar listelenir
- Başlangıçta açık lisans modeli (ör. CC BY-SA) kullanılabilir

---

## 🔮 Gelecek Planları
- Otomatik rol eşleşmesi
- Görev yönetimi (kanban)
- Vitrin görünürlüğü ve oy sistemi
- Gelir paylaşım arayüzü
