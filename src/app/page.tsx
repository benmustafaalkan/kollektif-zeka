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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="mb-8">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Mayası İnsan, Gücü Yapay Zeka
          </h1>

          {/* Alt Motto */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Keşfet <span className="mx-2">•</span> Üret <span className="mx-2">•</span> Bağ Kur
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/hub">Topluluğa Katıl</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToFeatures}
            >
              Bizi Tanı
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Keşfet */}
            <Card className="text-center border-border">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Telescope className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Keşfet</CardTitle>
                <CardDescription className="text-base">
                  Yeni teknolojileri ve AI araçlarını öğren, en güncel gelişmeleri takip et.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Üret */}
            <Card className="text-center border-border">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Pickaxe className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Üret</CardTitle>
                <CardDescription className="text-base">
                  Hackathonlar ve atölyelerle proje geliştir, kolektif üretimin gücünü deneyimle.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Bağ Kur */}
            <Card className="text-center border-border">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <UsersIcon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">Bağ Kur</CardTitle>
                <CardDescription className="text-base">
                  Benzer vizyona sahip insanlarla tanış, birlikte büyüyen bir topluluk oluştur.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Etkinlikler</h2>
            <p className="text-muted-foreground text-lg">
              Gelecek etkinliklerimizi takip edin, geçmiş etkinliklerimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Luma Calendar */}
            <Card className="border-border overflow-hidden">
              <CardHeader>
                <CardTitle>Gelecek Etkinlikler</CardTitle>
                <CardDescription>
                  Yaklaşan etkinliklerimizi takvimden görüntüleyin
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-hidden rounded-lg border-t border-border bg-card">
                  <iframe
                    src="https://luma.com/embed/calendar/cal-3GEFaTnXnvjHfMw/events?lt=dark"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Past Events */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <CardTitle>Neler Yaptık?</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Daha önce gerçekleştirdiğimiz 7+ etkinliğin kayıtları ve detayları.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
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
          </div>
        </div>
      </section>

      {/* Footer Signature */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            Kollektif Zeka, bir{" "}
            <Link 
              href="https://yapayzeka.link" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              yapayzeka.link
            </Link>
            {" "}inisiyatifidir.
          </p>
        </div>
      </section>
    </div>
  );
}
