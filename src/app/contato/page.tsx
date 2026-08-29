import type { Metadata } from "next";
import ContatoForm from "./ContatoForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o VitaCare Hospital.",
};

export default function ContatoPage() {
  return <ContatoForm />;
}
