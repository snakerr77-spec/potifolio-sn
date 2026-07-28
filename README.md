# SN Portfolio — React + TypeScript + Vite

Portfólio futurista da identidade **SN**, com visual preto e azul, projetos separados entre **Prontos** e **Em criação**, animações responsivas e tecnologias orbitando a logo.

## Projetos configurados

### Prontos
- LAG Controller
- Tecnoshop Cerquilho

### Em criação
- Netuno IA
- Pastelaria Digital
- Servia

O card antigo “SN Portfolio” foi removido.

## Rodar no computador

Instale o Node.js LTS e execute:

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal, normalmente `http://localhost:5173`.

## Gerar a versão final

```bash
npm run build
npm run preview
```

A pasta final será `dist`.

## Publicar no GitHub Pages

O projeto já possui o arquivo `.github/workflows/deploy.yml` e calcula automaticamente o caminho do repositório durante o build.

1. Crie um repositório vazio no GitHub.
2. Envie todos os arquivos deste projeto para a raiz do repositório.
3. Confirme que a branch principal se chama `main`.
4. Abra **Settings → Pages**.
5. Em **Source**, selecione **GitHub Actions**.
6. Abra a aba **Actions** e aguarde o workflow `Deploy SN Portfolio to GitHub Pages` finalizar.
7. O endereço ficará no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Cada novo envio para a branch `main` fará uma nova publicação automaticamente.

## Alterar projetos e links

Edite:

```text
src/data/projects.ts
```

Status disponíveis:

```ts
status: 'ready'
status: 'building'
```

## Alterar nome e redes sociais

Edite:

```text
src/data/profile.ts
```

Os campos de LinkedIn e e-mail ficam ocultos enquanto estiverem vazios.

## Estrutura principal

```text
src/
  components/
  data/
  App.tsx
  main.tsx
  styles.css
public/
  logo-sn.svg
.github/workflows/
  deploy.yml
```
