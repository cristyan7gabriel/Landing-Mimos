"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getGiftSuggestions } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wand2, Loader2, Heart, Gift } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Buscando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Encontrar Presente
        </>
      )}
    </Button>
  );
}

export default function GiftFinder() {
  const initialState = { success: false };
  const [state, formAction] = useActionState(getGiftSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success === false && state.message) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="gift-finder" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">Encontre o Presente Perfeito</CardTitle>
            <CardDescription className="mt-2 text-lg">
              Não sabe o que escolher? Deixe nossa IA te ajudar! Descreva a pessoa ou a ocasião.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <Textarea
                name="preferences"
                placeholder="Ex: 'É para minha mãe, ela adora jardinagem e chás relaxantes.'"
                rows={4}
                required
                minLength={10}
                className="text-base"
              />
              <div className="flex justify-center">
                <SubmitButton />
              </div>
            </form>

            {state?.success && state.recommendations && (
              <div className="mt-10">
                <h3 className="text-center font-headline text-2xl font-semibold mb-6">Nossas Sugestões para Você</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {state.recommendations.map((rec, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Heart className="h-5 w-5 text-primary" />
                          {rec.productName}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{rec.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
