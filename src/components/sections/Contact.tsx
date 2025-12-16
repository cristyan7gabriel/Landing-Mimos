"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function Contact() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999";

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
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-12 max-w-2xl w-full">
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
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full w-fit">
                        <MessageCircle className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">WhatsApp</h3>
                        <p className="text-muted-foreground">Envie uma mensagem a qualquer hora.</p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Iniciar Conversa</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}