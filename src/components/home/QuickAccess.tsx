import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quickAccessItems } from "@/data/quick-access";
import { Card } from "@/components/ui/Card";

export function QuickAccess() {
  return (
    <section className="relative z-10 -mt-8 pb-4" aria-labelledby="quick-access-title">
      <div className="section-container">
        <h2 id="quick-access-title" className="sr-only">
          Acesso rápido
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccessItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <Card hover className="h-full">
                <div
                  className={`inline-flex rounded-xl p-3 ${item.accent}`}
                  aria-hidden="true"
                >
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold text-secondary-900 group-hover:text-primary-700">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                  Acessar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
