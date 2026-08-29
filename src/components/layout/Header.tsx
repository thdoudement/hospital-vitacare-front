"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Search, HeartPulse, UserCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { SearchModal } from "@/components/layout/SearchModal";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-18">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <HeartPulse className="size-5" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight text-secondary-900">
                  {siteConfig.shortName}
                </span>
                <span className="hidden text-xs text-secondary-500 sm:block">Hospital</span>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-secondary-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Buscar no site"
                onClick={() => setSearchOpen(true)}
                className="rounded-lg p-2 text-secondary-600 transition-colors hover:bg-slate-100"
              >
                <Search className="size-5" />
              </button>
              <Link
                href="/portal/login"
                className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-secondary-700 transition-colors hover:bg-primary-50 xl:flex"
              >
                <UserCircle className="size-4 text-primary-600" aria-hidden="true" />
                Portal do paciente
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="hidden items-center gap-1.5 text-sm font-medium text-secondary-700 xl:flex"
              >
                <Phone className="size-4 text-primary-600" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <Button href="/agendamento" size="sm">
                Agendar consulta
              </Button>
            </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Buscar no site"
              onClick={() => setSearchOpen(true)}
              className="rounded-lg p-2 text-secondary-700"
            >
              <Search className="size-6" />
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-secondary-700"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-slate-100 bg-white lg:hidden",
            mobileOpen ? "max-h-96" : "max-h-0",
          )}
        >
          <nav className="section-container flex flex-col gap-1 py-4" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-secondary-700 hover:bg-primary-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/portal/login"
              className="rounded-lg px-3 py-2.5 text-base font-medium text-secondary-700 hover:bg-primary-50"
              onClick={() => setMobileOpen(false)}
            >
              Portal do paciente
            </Link>
            <div className="mt-3 border-t border-slate-100 pt-3">
              <Button href="/agendamento" className="w-full">
                Agendar consulta
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
