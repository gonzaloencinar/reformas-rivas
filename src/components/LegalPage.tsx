import type { ReactNode } from 'react'

/** Contenedor de las páginas legales (aviso legal, privacidad, cookies). */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="flex-grow pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 font-heading text-3xl font-black text-slate-900 md:text-4xl">{title}</h1>
        <div className="max-w-none text-slate-600">{children}</div>
      </div>
    </main>
  )
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="mt-8 mb-4 text-xl font-bold text-slate-900">{children}</h2>
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="mb-4 list-disc space-y-2 pl-5">{children}</ul>
}
