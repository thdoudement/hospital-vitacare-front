"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { registerPatient, ApiError } from "@/lib/api";
import { saveAuth } from "@/lib/auth";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CadastroForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      const response = await registerPatient({
        fullName: String(form.get("fullName")),
        email: String(form.get("email")),
        password: String(form.get("password")),
        phone: String(form.get("phone") || "") || undefined,
        cpf: String(form.get("cpf") || "") || undefined,
      });
      saveAuth(response.accessToken, response.patient);
      router.push("/portal/resultados");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section-container py-16 lg:py-24">
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="text-2xl font-bold text-secondary-900">Criar conta</h1>
          <p className="mt-2 text-secondary-600">
            Cadastre-se para acessar seus resultados de exames.
          </p>

          {error && (
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700">
                Nome completo
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                Telefone (opcional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-secondary-700">
                CPF (opcional)
              </label>
              <input
                id="cpf"
                name="cpf"
                type="text"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Cadastrando..." : "Criar conta"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-secondary-600">
            Já tem conta?{" "}
            <Link href="/portal/login" className="font-medium text-primary-600 hover:underline">
              Faça login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
