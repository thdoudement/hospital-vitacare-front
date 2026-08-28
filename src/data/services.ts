import {
  Stethoscope,
  Baby,
  Brain,
  Heart,
  Bone,
  Eye,
  Microscope,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Pronto-Socorro",
    description:
      "Atendimento de urgência e emergência 24 horas, com equipe especializada e infraestrutura completa.",
    icon: Activity,
    slug: "pronto-socorro",
  },
  {
    id: "2",
    title: "Cardiologia",
    description:
      "Diagnóstico e tratamento de doenças cardiovasculares, incluindo cateterismo e cirurgias cardíacas.",
    icon: Heart,
    slug: "cardiologia",
  },
  {
    id: "3",
    title: "Neurologia",
    description:
      "Cuidados especializados para distúrbios do sistema nervoso, AVC e neurocirurgias.",
    icon: Brain,
    slug: "neurologia",
  },
  {
    id: "4",
    title: "Ortopedia",
    description:
      "Tratamento de fraturas, lesões esportivas, artroscopias e próteses articulares.",
    icon: Bone,
    slug: "ortopedia",
  },
  {
    id: "5",
    title: "Pediatria",
    description:
      "Acompanhamento integral da saúde infantil, UTI neonatal e internação pediátrica.",
    icon: Baby,
    slug: "pediatria",
  },
  {
    id: "6",
    title: "Oftalmologia",
    description:
      "Consultas, cirurgias refrativas, catarata e tratamentos para glaucoma.",
    icon: Eye,
    slug: "oftalmologia",
  },
  {
    id: "7",
    title: "Diagnóstico por Imagem",
    description:
      "Raio-X, tomografia, ressonância magnética, ultrassom e medicina nuclear.",
    icon: Microscope,
    slug: "diagnostico-imagem",
  },
  {
    id: "8",
    title: "Clínica Geral",
    description:
      "Consultas, check-ups preventivos e encaminhamento para especialistas.",
    icon: Stethoscope,
    slug: "clinica-geral",
  },
];
