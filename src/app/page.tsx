"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Logo */}
        <div className="space-y-4">
          <Image
            src="/kollektif-zeka.jpeg"
            alt="Kollektif Zeka"
            width={200}
            height={150}
            className="mx-auto max-w-full h-auto drop-shadow-lg rounded-lg"
            priority
          />
        </div>

        {/* Coming Soon Text */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-200 tracking-tight">
            Birlikte Hayal Ediyoruz, Yapay Zekâ ile Geliştiriyoruz
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light">
            Farklı disiplinlerden gelen üretken zihinler, kolektif aklın gücüyle yapay zekâyı dönüştürüyor.
          </p>
        </div>

        {/* Email Signup */}
        <div className="space-y-4 bg-gradient-to-br from-slate-800/95 to-slate-700/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-600/50 shadow-xl max-w-2xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-slate-200">
              Kollektif Zeka online topluluğu yakında açılıyor!
            </h3>
            <p className="text-base text-slate-400">
              Topluluğun öncülerinden olmak istiyorsan e-postanı bırak.
            </p>
          </div>
          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            id="emailForm"
          >
            <input
              type="email"
              placeholder="E-posta adresiniz"
              required
              className="flex-1 px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              id="emailInput"
            />
            <button 
              type="submit"
              id="submitButton"
              className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Katıl
            </button>
          </form>
          <p className="text-sm text-slate-500 italic text-center">
            Spam yapmayacağımıza söz veriyoruz. Sadece önemli duyurular için kullanacağız.
          </p>
          
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let lastSubmitTime = 0;
                const submitButton = document.getElementById('submitButton');
                const form = document.getElementById('emailForm');
                const emailInput = document.getElementById('emailInput');
                const cooldownTime = 5000; // 5 saniye
                
                form.addEventListener('submit', function(e) {
                  e.preventDefault();
                  
                  const now = Date.now();
                  const timeSinceLastSubmit = now - lastSubmitTime;
                  
                  if (timeSinceLastSubmit < cooldownTime) {
                    // Buton durumunu güncelle
                    submitButton.disabled = true;
                    submitButton.textContent = 'Lütfen bekleyin...';
                    
                    // Geri sayım
                    const remainingTime = Math.ceil((cooldownTime - timeSinceLastSubmit) / 1000);
                    submitButton.textContent = remainingTime + ' saniye bekleyin';
                    
                    const countdown = setInterval(() => {
                      const newRemainingTime = Math.ceil((cooldownTime - (Date.now() - lastSubmitTime)) / 1000);
                      if (newRemainingTime <= 0) {
                        clearInterval(countdown);
                        submitButton.disabled = false;
                        submitButton.textContent = 'Katıl';
                      } else {
                        submitButton.textContent = newRemainingTime + ' saniye bekleyin';
                      }
                    }, 1000);
                    
                    return false;
                  }
                  
                  lastSubmitTime = now;
                  submitButton.disabled = true;
                  
                  // Geri sayım başlat
                  let countdown = 5;
                  submitButton.textContent = 'Gönderiliyor... (' + countdown + ')';
                  
                  const countdownInterval = setInterval(() => {
                    countdown--;
                    if (countdown > 0) {
                      submitButton.textContent = 'Gönderiliyor... (' + countdown + ')';
                    } else {
                      clearInterval(countdownInterval);
                      submitButton.textContent = 'Gönderiliyor...';
                    }
                  }, 1000);
                  
                  // Arka planda Google Forms'a gönder
                  const formData = new FormData();
                  formData.append('entry.976432797', emailInput.value);
                  
                  fetch('https://docs.google.com/forms/d/1K8UJTAHY4Wy72fVshf3EpA_ypVoO1HISSY49E8XYGAs/formResponse', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                  }).then(() => {
                    // Başarılı
                    clearInterval(countdownInterval);
                    submitButton.textContent = 'Teşekkürler!';
                    emailInput.value = '';
                    emailInput.disabled = true;
                    
                    setTimeout(() => {
                      submitButton.disabled = false;
                      submitButton.textContent = 'Katıl';
                      emailInput.disabled = false;
                    }, 3000);
                  }).catch(() => {
                    // Hata durumunda
                    clearInterval(countdownInterval);
                    submitButton.textContent = 'Tekrar Dene';
                    submitButton.disabled = false;
                  });
                });
              })();
            `
          }} />
        </div>

        {/* Event Info with Image */}
        <div className="relative space-y-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-slate-200">
            Kollektif Zeka | Ankara - Vibe Coding
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-base text-slate-400 leading-relaxed">
                2 Ağustos 2025&apos;te Ankara Tekmer&apos;de ilk Kollektif Zeka buluşmamızı gerçekleştirdik.
                Farklı disiplinlerden gelen katılımcılarla, yapay zekâ odağında kolektif üretimi deneyimledik.
              </p>
              <div className="flex flex-col items-center mt-4">
                <a
                  href="https://kommunity.com/kollektifzeka/events/kollektif-zeka-ankara-5e6b004d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-slate-400 hover:text-slate-200 transition-colors duration-300 text-sm font-medium"
                >
                  Etkinlik Detayları →
                </a>
              </div>
            </div>
            
            {/* Sponsor Section */}
            <div className="flex flex-col items-center space-y-3 bg-slate-700/70 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50">
              <p className="text-sm font-medium text-slate-300">
                Etkinlik Sponsoru
              </p>
              <a
                href="https://ankaratekmer.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src="/tekmer-logo.png"
                  alt="TEKMER Logo"
                  width={120}
                  height={60}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
            
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  const lightbox = document.getElementById('lightbox');
                  if (lightbox) {
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                  }
                }}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/kollektif-zeka-etkinlik.jpeg"
                  alt="Etkinlik Görseli"
                  width={280}
                  height={210}
                  className="rounded-lg shadow-lg"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <div 
          id="lightbox" 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              const lightbox = document.getElementById('lightbox');
              if (lightbox) {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
              }
            }
          }}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => {
                const lightbox = document.getElementById('lightbox');
                if (lightbox) {
                  lightbox.classList.add('hidden');
                  document.body.style.overflow = 'auto';
                }
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 text-2xl font-bold"
            >
              ✕
            </button>
            <Image
              src="/kollektif-zeka-etkinlik.jpeg"
              alt="Etkinlik Görseli - Büyük"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Social Links and Links Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-medium text-slate-400">
              Bize Ulaşın:
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://x.com/benmustafaalkan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/benmustafaalkan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Website Link */}
          <div className="border-l border-slate-300 dark:border-slate-600 pl-6">
            <a
              href="https://yapayzeka.link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 font-medium"
            >
              yapayzeka.link
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2025 Kollektif Zeka. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
}
