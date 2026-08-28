"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-16 text-white">
        <div className="section-container">
          <h1 className="text-4xl font-bold sm:text-5xl">Contato</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Estamos à disposição para tirar dúvidas, receber sugestões e ajudar
            no que precisar.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-secondary-900">
                Informações de contato
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-secondary-900">Endereço</p>
                    <p className="text-secondary-600">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city} — {siteConfig.address.state},{" "}
                      {siteConfig.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-secondary-900">Telefone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-secondary-900">E-mail</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-secondary-900">Horários</p>
                    <p className="text-secondary-600">{siteConfig.hours.reception}</p>
                    <p className="font-medium text-emergency">{siteConfig.hours.emergency}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <Card className="text-center">
                  <Send className="mx-auto size-12 text-primary-600" aria-hidden="true" />
                  <h2 className="mt-4 text-2xl font-bold text-secondary-900">
                    Mensagem enviada!
                  </h2>
                  <p className="mt-2 text-secondary-600">
                    Retornaremos em breve. Obrigado pelo contato.
                  </p>
                </Card>
              ) : (
                <Card>
                  <h2 className="text-xl font-semibold text-secondary-900">
                    Envie uma mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-secondary-700">
                          Nome
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-secondary-700">
                          E-mail
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700">
                        Assunto
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <Button type="submit" size="lg">
                      Enviar mensagem
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
