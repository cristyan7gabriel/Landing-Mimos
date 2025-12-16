"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'product-1',
    name: 'Sabonete Decorado',
    price: 'R$ 25,00',
  },
  {
    id: 'product-2',
    name: 'Chocolate Artesanal',
    price: 'R$ 35,00',
  },
  {
    id: 'product-3',
    name: 'Cachecol de Lã',
    price: 'R$ 79,90',
  },
  {
    id: 'product-4',
    name: 'Biscoitos Decorados',
    price: 'R$ 45,00',
  },
  {
    id: 'product-5',
    name: 'Vela Aromática',
    price: 'R$ 55,00',
  },
];

const WHATSAPP_LINK = "https://wa.me/5562994811821?text=Olá, vi um produto no site e tenho interesse em realizar a compra! ";

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Uma seleção de nossos mimos mais queridos, feitos especialmente para você.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {products.map((product) => {
              const image = PlaceHolderImages.find(p => p.id === product.id);
              const whatsappMessage = `Olá, tenho interesse no produto: ${product.name}!`;
              const whatsappProductLink = `https://wa.me/5562994811821?text=${encodeURIComponent(whatsappMessage)}`;
              return (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="p-0">
                        {image && (
                          <div className="aspect-square w-full overflow-hidden">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={500}
                              height={500}
                              className="object-cover w-full h-full"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="flex flex-col items-start p-4 bg-card">
                        <h3 className="font-headline text-xl font-semibold text-foreground">{product.name}</h3>
                        <div className="flex justify-between items-center w-full mt-2">
                           <p className="text-lg font-bold text-primary">{product.price}</p>
                           <Button asChild size="sm" variant="outline">
                             <Link href={whatsappProductLink} target="_blank" rel="noopener noreferrer">
                               <ShoppingCart className="mr-2 h-4 w-4" />
                               Comprar
                             </Link>
                           </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"/>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"/>
        </Carousel>
      </div>
    </section>
  );
}