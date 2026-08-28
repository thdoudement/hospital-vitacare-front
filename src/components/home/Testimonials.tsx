import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section
      className="bg-secondary-50 py-16 lg:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Depoimentos
          </p>
          <h2 id="testimonials-title" className="section-title mt-2">
            O que nossos pacientes dizem
          </h2>
          <p className="section-subtitle mx-auto">
            A confiança de quem já passou pelo VitaCare é nossa maior referência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <Quote
                className="absolute right-6 top-6 size-8 text-primary-100"
                aria-hidden="true"
              />
              <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrelas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-secondary-700 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                <p className="text-sm text-secondary-500">{testimonial.service}</p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
