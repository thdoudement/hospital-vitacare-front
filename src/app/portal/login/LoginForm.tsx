"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeartPulse, AlertCircle } from "lucide-react";
import { loginPatient, ApiError } from "@/lib/api";
import { saveAuth } from "@/lib/auth";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      const response = await loginPatient({
        email: String(form.get("email")),
        password: String(form.get("password")),
      });
      saveAuth(response.accessToken, response.patient);
      router.push("/portal/resultados");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section-container py-16 lg:py-24">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-600 text-white">
            <HeartPulse className="size-7" aria-hidden="true" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-secondary-900">Portal do paciente</h1>
          <p className="mt-2 text-secondary-600">
            Acesse seus resultados de exames de forma segura.
          </p>
        </div>

        <Card>
          {error && (
            <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
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
                autoComplete="current-password"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-secondary-600">
            Ainda não tem conta?{" "}
            <Link href="/portal/cadastro" className="font-medium text-primary-600 hover:underline">
              Cadastre-se
            </Link>
          </p>

          <div className="mt-6 rounded-lg bg-secondary-50 p-4 text-sm text-secondary-600">
            <p className="font-medium text-secondary-800">Conta demo:</p>
            <p className="mt-1">maria.silva@email.com / paciente123</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
