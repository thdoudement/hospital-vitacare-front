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
                <Button
                  href="/contato"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Fale conosco
                </Button>
              </div>
            </div>

            <div className="hidden bg-white/5 p-8 lg:block lg:p-12">
              <Card className="h-full border-0 bg-white/10 text-white backdrop-blur">
                <h3 className="text-lg font-semibold">Como chegar</h3>
                <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="size-12 text-primary-300/50" aria-hidden="true" />
                  <span className="sr-only">Mapa de localização — em breve</span>
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
