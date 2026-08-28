# GitFlow — VitaCare Hospital

Este projeto segue o modelo **GitFlow** para organização de branches e releases.

## Branches principais

| Branch | Propósito |
|---|---|
| `main` | Código em produção — sempre estável |
| `develop` | Integração de features — branch de desenvolvimento |

## Branches temporárias

| Padrão | Origem | Destino | Uso |
|---|---|---|---|
| `feature/*` | `develop` | `develop` | Nova funcionalidade |
| `release/*` | `develop` | `main` + `develop` | Preparar versão |
| `hotfix/*` | `main` | `main` + `develop` | Correção urgente |

## Fluxo do dia a dia

```bash
# 1. Atualizar develop
git checkout develop
git pull origin develop

# 2. Criar feature
git checkout -b feature/minha-feature

# 3. Desenvolver e commitar
git add .
git commit -m "feat: descrição da feature"

# 4. Push e abrir PR para develop
git push -u origin feature/minha-feature
gh pr create --base develop --title "feat: minha feature"

# 5. Após merge, limpar branch local
git checkout develop
git pull origin develop
git branch -d feature/minha-feature
```

## Release para produção

```bash
git checkout develop
git pull origin develop
git checkout -b release/v0.2.0

# Ajustes finais, depois:
git push -u origin release/v0.2.0
gh pr create --base main --title "release: v0.2.0"
```

## Convenção de commits

- `feat:` — nova funcionalidade
- `fix:` — correção de bug
- `docs:` — documentação
- `chore:` — configuração/build
- `refactor:` — refatoração
- `test:` — testes

## Clonar o projeto

```bash
git clone https://github.com/thdoudement/hospital-vitacare-front.git
cd hospital-vitacare-front
git checkout develop
npm install
npm run dev
```
