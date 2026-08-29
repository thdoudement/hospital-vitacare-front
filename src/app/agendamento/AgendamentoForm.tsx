"use client";

import { useState } from "react";
import { Calendar, User, Phone, Mail, FileText, AlertCircle } from "lucide-react";
import { createAppointment } from "@/lib/api";
import { ApiError } from "@/lib/api";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ApiSpecialty } from "@/types/api";

interface AgendamentoFormProps {
  specialties: ApiSpecialty[];
}

export default function AgendamentoForm({ specialties }: AgendamentoFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      await createAppointment({
        name: String(form.get("name")),
        phone: String(form.get("phone")),
        email: String(form.get("email")),
        specialty: String(form.get("specialty")),
        date: String(form.get("date")),
        notes: String(form.get("notes") || "") || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Erro ao enviar solicitação");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-16 text-white">
        <div className="section-container">
          <h1 className="text-4xl font-bold sm:text-5xl">Agendar consulta</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            confirmar seu horário.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <Card className="text-center">
                <div
                  className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-100 text-primary-700"
                  aria-hidden="true"
                >
                  <Calendar className="size-8" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-secondary-900">
                  Solicitação enviada!
                </h2>
                <p className="mt-2 text-secondary-600">
                  Em breve entraremos em contato para confirmar sua consulta.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Fazer novo agendamento
                </Button>
              </Card>
            ) : (
              <Card>
                {error && (
                  <div className="mb-6 flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                      Nome completo
                    </label>
                    <div className="relative mt-1.5">
                      <User
                        className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-secondary-400"
                        aria-hidden="true"
                      />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Seu nome"
                        className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                        Telefone
                      </label>
                      <div className="relative mt-1.5">
                        <Phone
                          className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-secondary-400"
                          aria-hidden="true"
                        />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="(11) 99999-9999"
                          className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                        E-mail
                      </label>
                      <div className="relative mt-1.5">
                        <Mail
                          className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-secondary-400"
                          aria-hidden="true"
                        />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="seu@email.com"
                          className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-secondary-700">
                      Especialidade
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-secondary-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Selecione uma especialidade</option>
                      {specialties.map((s) => (
                        <option key={s.id} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-secondary-700">
                      Data preferencial
                    </label>
                    <div className="relative mt-1.5">
                      <Calendar
                        className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-secondary-400"
                        aria-hidden="true"
                      />
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={new Date().toISOString().slice(0, 10)}
                        className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-secondary-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-secondary-700">
                      Observações (opcional)
                    </label>
                    <div className="relative mt-1.5">
                      <FileText
                        className="absolute left-3 top-3 size-5 text-secondary-400"
                        aria-hidden="true"
                      />
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Informações adicionais sobre sua consulta"
                        className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Enviando..." : "Solicitar agendamento"}
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
