const TOKEN_KEY = "vitacare_token";
const PATIENT_KEY = "vitacare_patient";

export function saveAuth(accessToken: string, patient: unknown) {
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(PATIENT_KEY, JSON.stringify(patient));
}

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredPatient<T>() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(PATIENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(PATIENT_KEY);
}

export function isAuthenticated() {
  return Boolean(getToken());
}
