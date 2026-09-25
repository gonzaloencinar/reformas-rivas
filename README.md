# Reformas Rivas-Vaciamadrid

Web corporativa de **Reformas Rivas-Vaciamadrid Cerro** (https://reformasrivas.com), construida con
[TanStack Start](https://tanstack.com/start), React 19, Vite y Tailwind CSS v4. Se despliega en Vercel y los
formularios de presupuesto se envían por email con [Resend](https://resend.com).

## Requisitos

- Node.js 22 o superior
- pnpm 9 o superior

## Puesta en marcha

```bash
pnpm install
cp .env.example .env   # rellena RESEND_API_KEY y los emails
pnpm dev               # http://localhost:3000
```

Sin `RESEND_API_KEY`, en desarrollo el email se imprime por consola en lugar de enviarse.

## Scripts

| Script           | Qué hace                                              |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Servidor de desarrollo con HMR                        |
| `pnpm build`     | Compila la app en `.output/` (Nitro)                  |
| `pnpm preview`   | Sirve la compilación de producción en local           |
| `pnpm typecheck` | Comprueba tipos con TypeScript                        |
| `pnpm lint`      | ESLint                                                |
| `pnpm test`      | Tests unitarios con Vitest                            |
| `pnpm check`     | typecheck + lint + test                               |

## Variables de entorno

| Variable             | Obligatoria | Descripción                                                              |
| -------------------- | ----------- | ------------------------------------------------------------------------ |
| `RESEND_API_KEY`     | Sí (prod)   | Clave de API de Resend                                                   |
| `CONTACT_FROM_EMAIL` | No          | Remitente. El dominio debe estar verificado en Resend                    |
| `CONTACT_TO_EMAIL`   | No          | Buzón que recibe las solicitudes. Por defecto `contacto@reformasrivas.com` |

## Despliegue en Vercel

1. Importa el repositorio en Vercel. El plugin de Nitro detecta Vercel automáticamente: no hace falta `vercel.json`.
2. Configura las variables de entorno anteriores en el proyecto de Vercel.
3. Cada push a `main` despliega a producción.

## Estructura

```
src/
  routes/            Rutas (file-based): /contacto, /reformas-banos...
    __root.tsx       Documento HTML, cabecera, pie, widgets flotantes
    sitemap[.]xml.ts Sitemap generado desde src/lib/site.ts
  components/        Componentes de UI (layout, contacto, galería, FAQ...)
  content/           Contenido de las páginas de servicio
  lib/               Configuración del sitio, SEO, JSON-LD, redirecciones 301, esquema del formulario
  server/            Server functions y envío de email (solo servidor)
  styles/app.css     Tailwind v4 y tokens de diseño (colores, fuentes)
public/images/       Imágenes con las mismas rutas que el sitio original
```

## SEO

- URLs limpias. Las URLs `.html` del sitio original redirigen con 301 (`src/lib/redirects.ts`), resueltas en el borde de Vercel.
- Cada ruta declara `title`, `description`, `robots`, `canonical`, Open Graph y JSON-LD mediante `pageHead()`.
- Las páginas legales son `noindex, follow` y no figuran en el sitemap.
- `/robots.txt` apunta a `/sitemap.xml`.

## Skills de TanStack para agentes de IA

El proyecto incluye las skills oficiales de TanStack (vía [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent)).
Para listarlas o cargarlas:

```bash
pnpm dlx @tanstack/intent@latest list
pnpm dlx @tanstack/intent@latest load @tanstack/react-start#react-start
```
