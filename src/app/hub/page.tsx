"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Radio, 
  Instagram, 
  Linkedin, 
  Youtube,
  Twitter
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface SocialLink {
  title: string;
  description: string;
  url: string;
  liveUrl?: string; // Canlı yayın linki
  icon: React.ComponentType<{ className?: string }>;
  isSpecial?: boolean;
  isLive?: boolean;
  badge?: string;
  span?: string;
  hoverColor?: string;
}

// Zaman kontrolü fonksiyonu - TSİ her salı 15.07 - 15.30 arası
function isLiveNow(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Pazar, 1 = Pazartesi, 2 = Salı
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes; // Dakika cinsinden
  const startTime = 15 * 60 + 7; // 15:07 = 907 dakika
  const endTime = 15 * 60 + 30; // 15:30 = 930 dakika
  
  return day === 2 && currentTime >= startTime && currentTime <= endTime;
}

const socialLinks: SocialLink[] = [
  {
    title: "Kollektif Zeka Topluluğu",
    description: "Topluluğumuza katıl, yapay zeka ile ilgili en güncel gelişmeleri takip et ve diğer üyelerle bağlantı kur.",
    url: "https://topluluk.kollektifzeka.com",
    icon: Users,
    isSpecial: true,
    span: "md:col-span-1",
  },
  {
    title: "WhatsApp Topluluğu",
    description: "WhatsApp üzerinden topluluğumuza katılın.",
    url: "https://wa.me/905XXXXXXXXX",
    icon: WhatsAppIcon,
    isSpecial: true,
    span: "md:col-span-1",
    hoverColor: "hover:text-green-500",
  },
  {
    title: "Kollektif Zeka Radyo Programı",
    description: "Geçmiş yayın kayıtlarını hemen dinle.",
    url: "https://www.trtdinle.com/show/kolektif-zeka", // Dinleme linki (geçmiş kayıtlar)
    liveUrl: "https://radyo.trt.net.tr/kanallar/radyo-1", // Canlı yayın linki
    icon: Radio,
    isSpecial: true,
    isLive: true,
    badge: "YAYINDA",
  },
  {
    title: "X (Twitter)",
    description: "X'te bizi takip edin ve güncel paylaşımlarımızı görün.",
    url: "http://x.com/kollektifzeka",
    icon: XIcon,
    hoverColor: "hover:text-gray-400",
  },
  {
    title: "Instagram",
    description: "Instagram'da bizi takip edin.",
    url: "https://www.instagram.com/kollektifzeka",
    icon: Instagram,
    hoverColor: "hover:text-pink-500",
  },
  {
    title: "LinkedIn",
    description: "LinkedIn'de profesyonel ağımıza katılın.",
    url: "https://www.linkedin.com/groups/15754027/",
    icon: Linkedin,
    hoverColor: "hover:text-blue-500",
  },
  {
    title: "YouTube",
    description: "YouTube kanalımızda videolarımızı izleyin.",
    url: "https://www.youtube.com/@kollektifzeka",
    icon: Youtube,
    hoverColor: "hover:text-red-500",
  },
];

export default function HubPage() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // İlk kontrol
    setIsLive(isLiveNow());
    
    // Her dakika kontrol et
    const interval = setInterval(() => {
      setIsLive(isLiveNow());
    }, 60000); // 60 saniye

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 space-y-4">
          <div className="flex justify-center mb-6">
            <Image
              src="/kollektif-zeka.jpeg"
              alt="Kollektif Zeka"
              width={200}
              height={150}
              className="max-w-full h-auto drop-shadow-lg rounded-lg"
              priority
              loading="eager"
              quality={85}
              sizes="(max-width: 768px) 200px, 200px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-100 tracking-tight">
            Mayası İnsan, Gücü Yapay Zeka
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Keşfet - Üret - Bağ Kur
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            const isTRTRadio = link.isLive;
            
            // Radyo programı için özel render
            if (isTRTRadio) {
              return (
                <div key={index} className={link.span || ""}>
                  <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 group relative overflow-hidden">
                    {isLive && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge 
                          variant="destructive" 
                          className="flex items-center gap-1.5 animate-pulse"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          {link.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-slate-100 group-hover:text-white transition-colors mb-2">
                            {link.title}
                          </CardTitle>
                          <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors">
                            {link.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4 p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                          <Image
                            src="/TRT_Radyo_1_logo.svg"
                            alt="TRT Radyo 1"
                            width={80}
                            height={52}
                            className="w-20 h-auto"
                            priority
                          />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col gap-2 pb-6">
                      <Link
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="w-full"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-700 hover:text-white"
                        >
                          Geçmiş Kayıtları Dinle
                        </Button>
                      </Link>
                      <Link
                        href={link.liveUrl || "#"}
                        target={link.liveUrl?.startsWith("http") ? "_blank" : undefined}
                        rel={link.liveUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="w-full"
                      >
                        <Button 
                          variant={isLive ? "default" : "outline"}
                          className={`w-full ${isLive ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-700 hover:text-white"}`}
                        >
                          {isLive ? "🔴 Canlı Yayını Dinle" : "Yayın Günü (Salı 15:07)"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            }
            
            // Diğer kartlar için normal render
            return (
              <Link
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block ${link.span || ""}`}
              >
                <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 group relative overflow-hidden">
                  {link.isSpecial && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-slate-100 group-hover:text-white transition-colors mb-2">
                          {link.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors">
                          {link.description}
                        </CardDescription>
                      </div>
                      <div className={`ml-4 p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-700 transition-colors ${link.hoverColor || ""}`}>
                        <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </CardHeader>
                  
                  {link.isSpecial && (
                    <div className="absolute bottom-4 right-4 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span>Keşfet →</span>
                    </div>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
