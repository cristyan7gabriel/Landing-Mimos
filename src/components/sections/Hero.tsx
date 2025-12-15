import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
         />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Presentes Feitos com Amor
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 md:text-xl">
              Descubra nossa coleção exclusiva de doces e presentes artesanais, perfeitos para qualquer ocasião.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-transform hover:scale-105">
                <Link href="#products">Ver Produtos</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-transform hover:scale-105">
                <Link href="#contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
