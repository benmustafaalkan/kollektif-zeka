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
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 mb-8 md:mb-12">
          {/* Logo */}
          <div className="mb-4 md:mb-6">
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
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4 w-full max-w-md mx-auto">
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
        <section id="features" className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Keşfet */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <Telescope className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 text-slate-100">Keşfet</CardTitle>
                <CardDescription className="text-slate-400">
                  Yeni teknolojileri ve AI araçlarını öğren, en güncel gelişmeleri takip et.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Üret */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <Pickaxe className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 text-slate-100">Üret</CardTitle>
                <CardDescription className="text-slate-400">
                  Hackathonlar ve atölyelerle proje geliştir, kolektif üretimin gücünü deneyimle.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Bağ Kur */}
            <Card className="text-center border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <UsersIcon className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 text-slate-100">Bağ Kur</CardTitle>
                <CardDescription className="text-slate-400">
                  Benzer vizyona sahip insanlarla tanış, birlikte büyüyen bir topluluk oluştur.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Etkinlikler</h2>
              <p className="text-slate-400 text-base md:text-lg">
                Gelecek etkinliklerimizi takip edin, geçmiş etkinliklerimizi keşfedin
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Past Events */}
              <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-slate-300" />
                    <CardTitle className="text-slate-100">Neler Yaptık?</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
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
                <CardHeader>
                  <CardTitle className="text-slate-100">Gelecek Etkinlikler</CardTitle>
                  <CardDescription className="text-slate-400">
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
        <section className="py-8 md:py-12 border-t border-slate-700">
          <div className="text-center space-y-4">
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
