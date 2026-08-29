import type { Metadata } from "next";
import CadastroForm from "./CadastroForm";

export const metadata: Metadata = {
  title: "Portal do paciente — Cadastro",
  description: "Cadastre-se no portal do paciente VitaCare Hospital.",
};

export default function PortalCadastroPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-12 text-white">
        <div className="section-container">
          <h1 className="text-3xl font-bold">Cadastro</h1>
        </div>
      </section>
      <CadastroForm />
    </>
  );
}
