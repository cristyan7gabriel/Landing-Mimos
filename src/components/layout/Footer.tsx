import Link from 'next/link';
import { Gift, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/mimos_cestas_epresentes/";

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Gift className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">
              Mimos Doces e Presentes
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href={INSTAGRAM_PROFILE_URL} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Mimos Doces e Presentes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
