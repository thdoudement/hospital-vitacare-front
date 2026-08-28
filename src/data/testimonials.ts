export interface Testimonial {
  id: string;
  name: string;
  text: string;
  service: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    text: "Fui muito bem atendida no pronto-socorro. A equipe foi ágil, atenciosa e me deixou tranquila durante todo o processo.",
    service: "Pronto-Socorro",
    rating: 5,
  },
  {
    id: "2",
    name: "João Pereira",
    text: "Agendei minha consulta online em minutos. O Dr. Ricardo foi extremamente detalhado e profissional.",
    service: "Ortopedia",
    rating: 5,
  },
  {
    id: "3",
    name: "Patrícia Costa",
    text: "Minha filha foi internada na pediatria e recebemos um cuidado excepcional. Recomendo de coração.",
    service: "Pediatria",
    rating: 5,
  },
];

export const stats = [
  { value: "35+", label: "Anos de história" },
  { value: "180", label: "Leitos hospitalares" },
  { value: "120+", label: "Médicos especialistas" },
  { value: "50k+", label: "Atendimentos/ano" },
];
