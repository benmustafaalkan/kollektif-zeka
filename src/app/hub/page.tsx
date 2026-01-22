"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Radio, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SocialLink {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  isSpecial?: boolean;
  isLive?: boolean;
  badge?: string;
  span?: string;
  hoverColor?: string;
}

const socialLinks: SocialLink[] = [
  {
    title: "Kollektif Zeka Topluluğu",
    description: "Topluluğumuza katıl, yapay zeka ile ilgili en güncel gelişmeleri takip et ve diğer üyelerle bağlantı kur.",
    url: "https://topluluk.kollektifzeka.com",
    icon: Users,
    isSpecial: true,
    span: "md:col-span-2",
  },
  {
    title: "Kollektif Zeka Radyo Programı",
    description: "Geçmiş yayın kayıtlarını hemen dinle.",
    url: "#",
    icon: Radio,
    isSpecial: true,
    isLive: true,
    badge: "YAYINDA",
  },
  {
    title: "WhatsApp",
    description: "Bize WhatsApp üzerinden ulaşın.",
    url: "https://wa.me/905XXXXXXXXX",
    icon: MessageCircle,
    hoverColor: "hover:text-green-500",
  },
  {
    title: "Instagram",
    description: "Instagram'da bizi takip edin.",
    url: "https://instagram.com/kollektifzeka",
    icon: Instagram,
    hoverColor: "hover:text-pink-500",
  },
  {
    title: "LinkedIn",
    description: "LinkedIn'de profesyonel ağımıza katılın.",
    url: "https://linkedin.com/company/kollektifzeka",
    icon: Linkedin,
    hoverColor: "hover:text-blue-500",
  },
  {
    title: "YouTube",
    description: "YouTube kanalımızda videolarımızı izleyin.",
    url: "https://youtube.com/@kollektifzeka",
    icon: Youtube,
    hoverColor: "hover:text-red-500",
  },
];

export default function HubPage() {
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
            
            return (
              <Link
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block ${link.span || ""}`}
              >
                <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 group relative overflow-hidden">
                  {link.isSpecial && !isTRTRadio && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  {isTRTRadio && (
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
                      <div className={`ml-4 p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-700 transition-colors ${link.hoverColor || ""}`}>
                        <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </CardHeader>
                  
                  {link.isSpecial && (
                    <CardContent>
                      <div className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <span>Keşfet →</span>
                      </div>
                    </CardContent>
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
