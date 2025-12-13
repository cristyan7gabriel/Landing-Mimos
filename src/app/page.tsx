import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProductShowcase from '@/components/sections/ProductShowcase';
import GiftFinder from '@/components/sections/GiftFinder';
import InstagramFeed from '@/components/sections/InstagramFeed';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <ProductShowcase />
        <GiftFinder />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
