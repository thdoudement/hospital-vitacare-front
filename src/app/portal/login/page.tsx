import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Portal do paciente — Login",
  description: "Acesse seus resultados de exames no VitaCare Hospital.",
};

export default function PortalLoginPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-12 text-white">
        <div className="section-container">
          <h1 className="text-3xl font-bold">Portal do paciente</h1>
        </div>
      </section>
      <LoginForm />
    </>
  );
}
