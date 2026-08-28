import { Phone, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function EmergencyBanner() {
  return (
    <div
      role="region"
      aria-label="Informações de emergência"
      className="bg-emergency text-white"
    >
      <div className="section-container flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
          <span className="font-medium">Emergência 24h</span>
          <span className="hidden sm:inline text-white/80">| Pronto-socorro sempre aberto</span>
        </div>
        <a
          href={`tel:${siteConfig.emergencyPhone}`}
          className="flex items-center gap-1.5 font-semibold underline-offset-2 hover:underline"
        >
          <Phone className="size-4" aria-hidden="true" />
          SAMU: {siteConfig.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
