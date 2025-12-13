"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Tem alguma dúvida ou pedido especial? Adoraríamos ouvir você!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Mail className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-muted-foreground">Envie-nos uma mensagem a qualquer hora.</p>
                    <a href="mailto:contato@mimos.com" className="text-primary hover:underline">contato@mimos.com</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Phone className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">Disponível de Seg. a Sex. das 9h às 18h.</p>
                    <a href="tel:+5511999999999" className="text-primary hover:underline">(11) 99999-9999</a>
                </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Seu Nome" required className="text-base" />
            <Input type="email" placeholder="Seu E-mail" required className="text-base" />
            <Textarea placeholder="Sua Mensagem" rows={5} required className="text-base" />
            <Button type="submit" size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
