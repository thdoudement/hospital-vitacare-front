import type {
  ApiAppointmentResponse,
  ApiDoctor,
  ApiExamResult,
  ApiMessageResponse,
  ApiPatient,
  ApiSearchResult,
  ApiSiteConfig,
  ApiSpecialty,
  ApiTestimonial,
  AuthResponse,
} from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  token?: string,
): Promise<T> {
  const headers = new Headers(options.headers);

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    cache: options.method && options.method !== "GET" ? "no-store" : undefined,
  });

  if (!response.ok) {
    let message = "Erro ao comunicar com o servidor";
    try {
      const data = (await response.json()) as { message?: string | string[] };
      if (Array.isArray(data.message)) {
        message = data.message.join(", ");
      } else if (data.message) {
        message = data.message;
      }
    } catch {
      // ignore parse errors
    }
    throw new ApiError(message, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export function getSpecialties() {
  return request<ApiSpecialty[]>("/specialties", { next: { revalidate: 60 } });
}

export function getDoctors(specialty?: string) {
  const query = specialty ? `?specialty=${encodeURIComponent(specialty)}` : "";
  return request<ApiDoctor[]>(`/doctors${query}`, { next: { revalidate: 60 } });
}

export function getTestimonials() {
  return request<ApiTestimonial[]>("/testimonials", { next: { revalidate: 60 } });
}

export function getSiteConfig() {
  return request<ApiSiteConfig>("/site-config", { next: { revalidate: 300 } });
}

export function searchSite(query: string) {
  return request<ApiSearchResult>(`/search?q=${encodeURIComponent(query)}`, {
    cache: "no-store",
  });
}

export function createAppointment(data: {
  name: string;
  phone: string;
  email: string;
  specialty: string;
  date: string;
  notes?: string;
}) {
  return request<ApiAppointmentResponse>("/appointments", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function createContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return request<ApiMessageResponse>("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function loginPatient(data: { email: string; password: string }) {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function registerPatient(data: {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  cpf?: string;
}) {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getPatientProfile(token: string) {
  return request<ApiPatient>("/patients/me", {}, token);
}

export function getExamResults(token: string) {
  return request<ApiExamResult[]>("/exam-results", {}, token);
}

export { ApiError, API_URL };
