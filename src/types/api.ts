export interface ApiSpecialty {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface ApiDoctor {
  id: string;
  name: string;
  specialty: string;
  crm: string;
  bio: string;
}

export interface ApiTestimonial {
  id: string;
  name: string;
  text: string;
  service: string;
  rating: number;
}

export interface ApiSiteConfig {
  name: string;
  shortName: string;
  phone: string;
  emergencyPhone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    reception: string;
    emergency: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  stats?: { value: string; label: string }[];
}

export interface ApiPatient {
  id: string;
  email: string;
  fullName: string;
  phone: string | null;
  cpf: string | null;
}

export interface ApiExamResult {
  id: string;
  examType: string;
  resultText: string;
  fileUrl: string | null;
  examDate: string;
  releasedAt: string;
}

export interface ApiSearchResult {
  specialties: ApiSpecialty[];
  doctors: ApiDoctor[];
}

export interface AuthResponse {
  accessToken: string;
  patient: ApiPatient;
}

export interface ApiMessageResponse {
  id: string;
  message: string;
}

export interface ApiAppointmentResponse {
  id: string;
  status: string;
  message: string;
}
