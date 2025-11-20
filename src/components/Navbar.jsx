import { Menu, X, PhoneCall, PawPrint } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Como funciona", href: "#how" },
    { label: "Planos", href: "#pricing" },
    { label: "Dúvidas", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 text-white grid place-items-center shadow-lg shadow-indigo-600/20">
              <PawPrint className="h-5 w-5" />
              <span className="absolute -inset-0.5 rounded-xl bg-white/10 blur-sm" />
            </div>
            <div>
              <p className="text-slate-900 font-bold leading-none">NFS Rápida</p>
              <p className="text-xs text-slate-500 leading-none">Velocidade felina. Segurança de manada.</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <PhoneCall className="h-4 w-4" /> Fale com vendas
            </a>
            <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-amber-500/30 transition-all">
              Começar grátis
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-slate-200 p-2 text-slate-700">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 py-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="rounded-md px-3 py-2 text-white bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 text-center font-medium">
                Começar grátis
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
