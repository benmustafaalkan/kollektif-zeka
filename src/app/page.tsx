"use client";

import Image from "next/image";
import Link from "next/link";
import { Telescope, Pickaxe, Users as UsersIcon, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 mb-6 md:mb-8">
          {/* Logo */}
          <div className="mb-3 md:mb-4">
            <Image
              src="/kollektif-zeka-small.jpeg"
              alt="Kollektif Zeka"
              width={200}
              height={150}
              className="mx-auto max-w-full h-auto drop-shadow-lg rounded-lg"
              priority
            />
          </div>

          {/* Main Motto */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight px-2">
            Mayası İnsan,<br className="md:hidden" />
            <span className="hidden md:inline"> </span>Gücü Yapay Zeka
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 w-full max-w-md mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto min-h-[44px]">
              <Link href="/hub">Topluluğa Katıl</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white min-h-[44px]"
              onClick={scrollToFeatures}
            >
              Bizi Tanı
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {/* Keşfet */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-slate-700/50">
                    <Telescope className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl mb-1.5 text-slate-100">Keşfet</CardTitle>
                <CardDescription className="text-slate-400 text-sm">
                  Yeni teknolojileri ve AI araçlarını öğren, en güncel gelişmeleri takip et.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Üret */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-slate-700/50">
                    <Pickaxe className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl mb-1.5 text-slate-100">Üret</CardTitle>
                <CardDescription className="text-slate-400 text-sm">
                  Hackathonlar ve atölyelerle proje geliştir, kolektif üretimin gücünü deneyimle.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Bağ Kur */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-slate-700/50">
                    <UsersIcon className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl mb-1.5 text-slate-100">Bağ Kur</CardTitle>
                <CardDescription className="text-slate-400 text-sm">
                  Benzer vizyona sahip insanlarla tanış, birlikte büyüyen bir topluluk oluştur.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-6 md:mb-8">
          <div className="space-y-4 md:space-y-6">
            <div className="text-center space-y-1.5">
              <h2 className="text-xl md:text-2xl font-bold text-slate-100">Etkinlikler</h2>
              <p className="text-slate-400 text-sm md:text-base">
                Gelecek etkinliklerimizi takip edin, geçmiş etkinliklerimizi keşfedin
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
              {/* Past Events */}
              <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                    <CardTitle className="text-slate-100 text-base md:text-lg">Neler Yaptık?</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400 text-sm">
                    Daha önce gerçekleştirdiğimiz 7+ etkinliğin kayıtları ve detayları.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-700 hover:text-white">
                    <Link 
                      href="https://kommunity.com/kollektifzeka/events/past" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Etkinlik Arşivi (Kommunity)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Luma Calendar */}
              <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-100 text-base md:text-lg">Gelecek Etkinlikler</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Yaklaşan etkinliklerimizi takvimden görüntüleyin
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full overflow-hidden rounded-lg border-t border-slate-700 bg-slate-800/50">
                    <iframe
                      src="https://luma.com/embed/calendar/cal-3GEFaTnXnvjHfMw/events?lt=dark"
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                      allowFullScreen
                      aria-label="Luma takvim - Gelecek etkinlikler"
                      title="Gelecek Etkinlikler Takvimi"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer Signature */}
        <section className="py-6 md:py-8 border-t border-slate-700">
          <div className="text-center space-y-2 md:space-y-3">
            <p className="text-slate-400">
              Kollektif Zeka, bir{" "}
              <Link 
                href="https://yapayzeka.link" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-slate-100 hover:underline font-medium transition-colors"
              >
                yapayzeka.link
              </Link>
              {" "}inisiyatifidir.
            </p>
            <p className="text-xs text-slate-500">
              © 2025 Kollektif Zeka. Tüm hakları saklıdır.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
