const colors = [
  "bg-rose-100 text-rose-700",
  "bg-blue-100 text-blue-700",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-cyan-100 text-cyan-700",
];

export function getDoctorInitials(name: string) {
  const parts = name
    .replace(/^(Dr\.|Dra\.)\s*/i, "")
    .trim()
    .split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

export function getDoctorColor(id: string) {
  const index = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
}
