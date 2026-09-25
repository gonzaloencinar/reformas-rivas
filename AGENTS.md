# Reformas Rivas — guía para agentes

Web corporativa de **Reformas Rivas-Vaciamadrid Cerro** construida con TanStack Start (React 19, Vite, Tailwind CSS v4), desplegada en Vercel con Nitro. Los formularios se envían por email con Resend.

## Reglas del proyecto

- Las URLs públicas son limpias (`/reformas-banos`, `/contacto`...). Las URLs `.html` del sitio original redirigen con 301 mediante `src/lib/redirects.ts` (routeRules de Nitro en `vite.config.ts`). Si cambias una URL, añade su redirección 301 y actualiza `src/lib/site.ts`.
- Toda la configuración del sitio (teléfono, email, dirección, navegación, sitemap) vive en `src/lib/site.ts`. No dupliques esos datos.
- El SEO de cada página se declara en `head()` con el helper `pageHead()` de `src/lib/seo.ts` (title, description, robots, canonical, Open Graph, JSON-LD).
- El contenido de las páginas de servicio está en `src/content/services.ts` y se renderiza con `src/components/ServicePage.tsx`.
- El formulario de contacto valida con el esquema compartido de `src/lib/contact-schema.ts` y envía a través de la server function `submitContact` (`src/server/contact.functions.ts`). Las claves de API solo se leen en el servidor.
- Antes de dar por terminado un cambio: `pnpm check` (typecheck + lint + tests) y `pnpm build`.

<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `pnpm dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->
