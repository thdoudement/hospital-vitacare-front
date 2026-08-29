import {
  Activity,
  Baby,
  Bone,
  Brain,
  Eye,
  Heart,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "pronto-socorro": Activity,
  cardiologia: Heart,
  neurologia: Brain,
  ortopedia: Bone,
  pediatria: Baby,
  oftalmologia: Eye,
  "diagnostico-imagem": Microscope,
  "clinica-geral": Stethoscope,
};

export function getServiceIcon(slug: string): LucideIcon {
  return iconMap[slug] ?? Stethoscope;
}
