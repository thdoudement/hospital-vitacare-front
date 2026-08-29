"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, LogOut, Loader2, AlertCircle } from "lucide-react";
import { getExamResults, getPatientProfile, ApiError } from "@/lib/api";
import { clearAuth, getStoredPatient, getToken } from "@/lib/auth";
import type { ApiExamResult, ApiPatient } from "@/types/api";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ResultadosPage() {
  const router = useRouter();
  const [patient, setPatient] = useState<ApiPatient | null>(null);
  const [exams, setExams] = useState<ApiExamResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/portal/login");
      return;
    }

    async function loadData() {
      try {
        const [profile, results] = await Promise.all([
          getPatientProfile(token!),
          getExamResults(token!),
        ]);
        setPatient(profile);
        setExams(results);
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          clearAuth();
          router.replace("/portal/login");
          return;
        }
        setError(err instanceof ApiError ? err.message : "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    }

    const stored = getStoredPatient<ApiPatient>();
    if (stored) setPatient(stored);
    loadData();
  }, [router]);

  function handleLogout() {
    clearAuth();
    router.push("/portal/login");
  }

  if (loading) {
    return (
      <div className="section-container flex min-h-[50vh] items-center justify-center gap-2 py-16 text-secondary-500">
        <Loader2 className="size-5 animate-spin" />
        Carregando...
      </div>
    );
  }

  return (
    <div className="section-container py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Resultados de exames</h1>
            {patient && (
              <p className="mt-1 text-secondary-600">
                Olá, {patient.fullName}
              </p>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="size-4" aria-hidden="true" />
            Sair
          </Button>
        </div>

        {error && (
          <div className="mt-6 flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="mt-8 space-y-4">
          {exams.length === 0 && !error && (
            <Card className="text-center text-secondary-600">
              Nenhum resultado disponível no momento.
            </Card>
          )}

          {exams.map((exam) => (
            <Card key={exam.id}>
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <FileText className="size-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-secondary-900">{exam.examType}</h2>
                    <time className="text-sm text-secondary-500">
                      {new Date(exam.examDate).toLocaleDateString("pt-BR")}
                    </time>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-700">
                    {exam.resultText}
                  </p>
                  {exam.releasedAt && (
                    <p className="mt-2 text-xs text-secondary-400">
                      Liberado em{" "}
                      {new Date(exam.releasedAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
