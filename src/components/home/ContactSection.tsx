import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="contact-title">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-800 text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
                Estamos prontos para cuidar de você
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Entre em contato, agende uma consulta ou venha nos visitar. Nossa
                equipe está à disposição para ajudar.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary-300" aria-hidden="true" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city} — {siteConfig.address.state}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-primary-300" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:underline">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-primary-300" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary-300" aria-hidden="true" />
                  <span>{siteConfig.hours.reception}</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/agendamento" variant="secondary">
                  Agendar consulta
                </Button>
                <Button href="/contato" variant="outline-light">
                  Fale conosco
                </Button>
              </div>
            </div>

            <div className="hidden bg-white/5 p-8 lg:block lg:p-12">
              <Card className="h-full border-0 bg-white/10 text-white backdrop-blur">
                <h3 className="text-lg font-semibold">Como chegar</h3>
                <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                    alt="Vista aérea de São Paulo — região do hospital"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-secondary-900/30" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-secondary-800 shadow">
                    Jardim Paulista — SP
                  </div>
                </div>
                <p className="mt-4 text-sm text-primary-100">
                  Estacionamento gratuito para pacientes e acompanhantes. Acesso
                  por transporte público: metrô linha verde, estação Trianon-Masp.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
