import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-secondary-900 text-slate-300">
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <HeartPulse className="size-4" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Comprometidos com a saúde e bem-estar de nossos pacientes, unindo
              tecnologia avançada e atendimento humanizado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city} — {siteConfig.address.state},{" "}
                  {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-primary-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-400">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Horários</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>{siteConfig.hours.reception}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-emergency" aria-hidden="true" />
                <span className="font-medium text-white">{siteConfig.hours.emergency}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 sm:flex-row">
          <p className="text-sm">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/contato" className="hover:text-primary-400">
              Política de privacidade
            </Link>
            <Link href="/contato" className="hover:text-primary-400">
              Termos de uso
            </Link>
            <Link href="/contato" className="hover:text-primary-400">
              Acessibilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
