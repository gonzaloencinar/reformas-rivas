import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Footer } from '~/components/layout/Footer'
import { Header } from '~/components/layout/Header'
import { FloatingWidgets } from '~/components/layout/FloatingWidgets'
import { site } from '~/lib/site'
import appCss from '~/styles/app.css?url'

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@700;900&display=swap'

const FAVICON =
  'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔨</text></svg>'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: site.name },
    ],
    links: [
      { rel: 'icon', href: FAVICON },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: FONTS_URL },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <Outlet />
      <Footer />
      <FloatingWidgets />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-800 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
