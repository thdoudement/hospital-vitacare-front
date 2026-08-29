# VitaCare Hospital — Frontend

Site institucional do VitaCare Hospital com integração completa à API backend.

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 15** | Framework React com App Router e SSR |
| **React 19** | Biblioteca de interface |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS 4** | Estilização utilitária |
| **Lucide React** | Ícones |

## Funcionalidades

- Homepage com dados dinâmicos da API
- Agendamento de consultas (formulário funcional)
- Contato (formulário funcional)
- Busca no site (especialidades e médicos)
- Portal do paciente com login, cadastro e resultados de exames
- Fallback para dados estáticos quando a API estiver offline

## Pré-requisitos

- Node.js 22.x
- Backend VitaCare rodando (ver `hospital-vitacare-back`)

## Como rodar

```powershell
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
copy .env.example .env.local

# 3. Iniciar (com backend em http://localhost:8080)
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## Portal do paciente (demo)

- **URL:** `/portal/login`
- **E-mail:** `maria.silva@email.com`
- **Senha:** `paciente123`

## Repositório backend

O backend fica em `../hospital-vitacare-back` (repositório separado).
