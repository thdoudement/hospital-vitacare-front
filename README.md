# VitaCare Hospital — Frontend

Site institucional de hospital desenvolvido com stack moderna para web. Projeto focado inicialmente no front-end, com dados mockados e formulários demonstrativos (sem backend).

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 15** | Framework React com App Router e SSR |
| **React 19** | Biblioteca de interface |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS 4** | Estilização utilitária |
| **Lucide React** | Ícones |

## Estrutura do projeto

```
src/
├── app/                  # Rotas (App Router)
│   ├── page.tsx          # Homepage
│   ├── servicos/         # Especialidades médicas
│   ├── medicos/          # Corpo clínico
│   ├── agendamento/      # Formulário de agendamento
│   └── contato/          # Formulário de contato
├── components/
│   ├── layout/           # Header, Footer, Banner de emergência
│   ├── home/             # Seções da homepage
│   └── ui/               # Componentes reutilizáveis
├── data/                 # Dados mockados (serviços, médicos, etc.)
└── lib/                  # Utilitários e configuração do site
```

## Páginas

- **/** — Homepage com hero, acesso rápido, serviços, sobre, médicos, depoimentos e contato
- **/servicos** — Lista completa de especialidades
- **/medicos** — Perfis do corpo clínico
- **/agendamento** — Formulário de agendamento (UI only)
- **/contato** — Informações e formulário de contato

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18.18 ou superior (recomendado: LTS 22.x)
- npm (incluso com Node.js)

### Node instalado mas `npm` não é reconhecido?

Se você acabou de instalar o Node.js e o terminal diz que `npm` não é reconhecido, o PATH ainda não foi recarregado. Faça um destes:

1. **Feche e reabra o terminal** (ou reinicie o Cursor)
2. **Ou** no PowerShell, recarregue o PATH manualmente:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
node --version
npm --version
```

Para confirmar que está tudo certo:

```powershell
node --version   # ex: v24.20.0
npm --version    # ex: 11.19.0
```

## Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# Build de produção
npm run build

# Rodar build de produção
npm start
```

## Referências de design

A estrutura foi inspirada em boas práticas de sites hospitalares modernos:

- Banner de emergência sempre visível
- CTAs de agendamento em destaque
- Acesso rápido a serviços frequentes (exames, resultados, laboratório)
- Diretório de especialidades e médicos
- Depoimentos e indicadores de confiança
- Layout mobile-first e acessível (WCAG)

## Próximos passos sugeridos

- [ ] Integração com backend/API
- [ ] Portal do paciente (login, resultados de exames)
- [ ] Busca no site
- [ ] Mapa interativo (Google Maps / OpenStreetMap)
- [ ] CMS para gestão de conteúdo
- [ ] Testes automatizados (Vitest + Testing Library)
