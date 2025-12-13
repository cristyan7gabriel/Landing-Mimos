import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-accent h-6 w-6" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Nossa História
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-4">
              A Mimos Doces e Presentes nasceu de uma paixão por criar momentos especiais. Cada produto em nossa loja é cuidadosamente feito à mão, utilizando ingredientes de alta qualidade e uma dose extra de carinho.
            </p>
            <p className="text-muted-foreground text-base md:text-lg">
              Acreditamos que os melhores presentes são aqueles que contam uma história e transmitem afeto. Nossa missão é ajudar você a encontrar o mimo perfeito que fará alguém sorrir, seja com um doce delicioso ou um presente único e personalizado.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-2xl transition-transform hover:scale-105">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={800}
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
