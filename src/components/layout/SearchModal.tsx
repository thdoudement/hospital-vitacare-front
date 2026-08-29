"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, X, Loader2 } from "lucide-react";
import { searchSite, ApiError } from "@/lib/api";
import type { ApiSearchResult } from "@/types/api";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ApiSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults(null);
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      setError(null);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchSite(query);
        setResults(data);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : "Erro na busca");
        setResults(null);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  if (!open) return null;

  const hasResults =
    results && (results.specialties.length > 0 || results.doctors.length > 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-20">
      <div
        className="w-full max-w-xl rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Buscar no site"
      >
        <div className="flex items-center gap-3 border-b border-slate-100 p-4">
          <Search className="size-5 text-secondary-400" aria-hidden="true" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar especialidades, médicos..."
            className="flex-1 text-base outline-none placeholder:text-secondary-400"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar busca"
            className="rounded-lg p-1.5 text-secondary-500 hover:bg-slate-100"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4">
          {loading && (
            <div className="flex items-center justify-center gap-2 py-8 text-secondary-500">
              <Loader2 className="size-5 animate-spin" />
              Buscando...
            </div>
          )}

          {!loading && error && (
            <p className="py-4 text-center text-sm text-red-600">{error}</p>
          )}

          {!loading && !error && query && !hasResults && (
            <p className="py-4 text-center text-sm text-secondary-500">
              Nenhum resultado para &ldquo;{query}&rdquo;
            </p>
          )}

          {!loading && hasResults && (
            <div className="space-y-6">
              {results.specialties.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary-500">
                    Especialidades
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {results.specialties.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/servicos#${item.slug}`}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 hover:bg-primary-50"
                        >
                          <span className="font-medium text-secondary-900">{item.title}</span>
                          <span className="mt-0.5 block text-sm text-secondary-500 line-clamp-1">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.doctors.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary-500">
                    Médicos
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {results.doctors.map((item) => (
                      <li key={item.id}>
                        <Link
                          href="/medicos"
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 hover:bg-primary-50"
                        >
                          <span className="font-medium text-secondary-900">{item.name}</span>
                          <span className="mt-0.5 block text-sm text-primary-600">
                            {item.specialty}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {!query && (
            <p className="py-4 text-center text-sm text-secondary-500">
              Digite para buscar especialidades e médicos
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        className={cn("absolute inset-0 -z-10")}
        onClick={onClose}
        aria-label="Fechar busca"
      />
    </div>
  );
}
