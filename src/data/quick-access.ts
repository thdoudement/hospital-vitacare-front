import {
  CalendarCheck,
  FileText,
  FlaskConical,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

export interface QuickAccessItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accent: string;
}

export const quickAccessItems: QuickAccessItem[] = [
  {
    id: "1",
    title: "Agendar consulta",
    description: "Marque online com o especialista de sua preferência",
    icon: CalendarCheck,
    href: "/agendamento",
    accent: "bg-primary-100 text-primary-700",
  },
  {
    id: "2",
    title: "Resultados de exames",
    description: "Acesse seus laudos e imagens de forma segura",
    icon: FileText,
    href: "/portal/login",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    id: "3",
    title: "Laboratório",
    description: "Confira preparo e horários de coleta",
    icon: FlaskConical,
    href: "/servicos",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    id: "4",
    title: "Central de atendimento",
    description: "Tire dúvidas por telefone ou WhatsApp",
    icon: PhoneCall,
    href: "/contato",
    accent: "bg-amber-100 text-amber-700",
  },
];
