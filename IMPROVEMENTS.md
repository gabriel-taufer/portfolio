# Portfolio Improvements & Suggestions

## 🚀 Performance

### 1. Otimizar favicon (CRÍTICO)
**Problema:** `tau.png` tem 1.1MB (1024x1024px) - muito grande para um favicon
**Solução:**
```bash
# Redimensionar e otimizar
npx sharp-cli resize 512 512 --input public/tau.png --output public/tau-optimized.png
# Ou usar online: https://squoosh.app/
```
**Impacto:** Reduzir de ~1.1MB para ~20-50KB (~95% menor)

### 2. Cache do RSS Feed
**Problema:** Blog busca RSS em toda renderização
**Solução:** Usar cache do Astro ou fetch com revalidação
```typescript
// Em blog/index.astro
const response = await fetch('https://poorthoughts.com/rss.xml', {
  next: { revalidate: 3600 } // Cache por 1 hora
});
```

### 3. Otimizar outras imagens
```bash
profile_pic_small.jpeg - verificar se pode comprimir
brazil_flag.png - 27KB (ok)
usa_flag.png - 24KB (ok)
```

## 🧹 Code Cleanup

### 1. Remover código comentado
**Arquivo:** `src/pages/work/index.astro:49-52`
```astro
<!--
  <ul class="animate flex flex-col gap-4">

  </ul> -->
```

### 2. Middleware não utilizado
**Arquivo:** `src/middleware.ts`
**Status:** Criado mas `context.locals.locale` não está sendo usado
**Ação:** Remover ou implementar uso

### 3. Consolidar imports em index.astro
**Problema:**
```typescript
import { SITE, HOME, SOCIALS } from "@consts";
```
Mas `SITE` também poderia exportar `SOCIALS`:
```typescript
export const SITE = {
  // ...
  SOCIALS: [...]
}
```

## 🌐 SEO & Acessibilidade

### 1. Adicionar atributo lang no HTML
```astro
<html lang={lang}>
```

### 2. Meta tags por idioma
Adicionar hreflang alternates:
```astro
<link rel="alternate" hreflang="en" href="https://taufer.dev/" />
<link rel="alternate" hreflang="pt" href="https://taufer.dev/pt/" />
```

### 3. Melhorar meta descriptions
Atualizar para português quando `lang === 'pt'`

## ✨ User Experience

### 1. Loading state para blog
```astro
{posts.length === 0 && !error ? (
  <p>Loading posts...</p>
) : posts.length === 0 ? (
  <p>No posts found.</p>
) : (
  // posts list
)}
```

### 2. Página 404 customizada
Criar `src/pages/404.astro` com mensagens em ambos idiomas

### 3. Adicionar animação no language picker
```astro
<img
  src={flagSrc}
  alt={altText}
  class="rounded hover:scale-110 transition-transform"
/>
```

## 📝 Content

### 1. Verificar traduções faltantes
Garantir que todos os textos em `ui.ts` estejam traduzidos

### 2. Adicionar aria-labels em português
Quando `lang === 'pt'`, usar labels em português

## 🛠️ Developer Experience

### 1. Adicionar scripts úteis em package.json
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

### 2. Criar .env.example
Se houver variáveis de ambiente no futuro

### 3. TypeScript strict mode
Verificar se está habilitado em `tsconfig.json`

## 🎯 Features Futuras (Opcional)

### 1. Sistema de comentários
- giscus (GitHub Discussions)
- utterances (GitHub Issues)

### 2. Analytics
- Plausible (privacy-friendly)
- Google Analytics 4

### 3. Newsletter integration
Se quiser coletar emails para atualizações do blog

### 4. Tema com mais variações
- Auto-switch baseado em hora do dia
- Mais opções de cores

### 5. Search functionality
Busca nos posts do blog e páginas

## 📊 Prioridade

### Alto (fazer agora):
1. ✅ Otimizar tau.png (1.1MB → ~30KB)
2. ✅ Remover código comentado
3. ✅ Adicionar lang attribute no HTML

### Médio (próxima sprint):
4. Cache do RSS feed
5. Página 404
6. Meta tags hreflang

### Baixo (quando tiver tempo):
7. Middleware cleanup
8. Analytics
9. Search

## 🎨 Design Improvements (Opcional)

### 1. Hover states mais ricos
Adicionar mais feedback visual nos links e botões

### 2. Smooth scroll behavior
```css
html {
  scroll-behavior: smooth;
}
```

### 3. Skeleton loading para blog
Usar placeholders enquanto carrega RSS

---

**Última atualização:** 2026-01-27
