import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  const instaImages = PlaceHolderImages.filter(p => p.id.startsWith('insta-'));

  return (
    <section id="instagram" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Siga-nos no Instagram
          </h2>
          <p className="text-accent mt-2 font-semibold text-lg">@mimosdocesepresentes</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {instaImages.map(image => (
            <Link key={image.id} href="#" className="group relative block overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={400}
                height={400}
                className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white"/>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-transform hover:scale-105">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Ver no Instagram
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
