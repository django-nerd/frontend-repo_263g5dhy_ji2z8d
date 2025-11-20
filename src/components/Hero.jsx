import { CheckCircle2, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[1400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              <ShieldCheck className="h-4 w-4 text-blue-600" /> Conformidade com prefeituras em todo o Brasil
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Emissão de Nota Fiscal de Serviço online, rápida e sem complicação
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Gere NFS-e em poucos cliques, sem burocracia. Plataforma segura, intuitiva e com suporte humano quando você precisar.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/30">
                Começar agora
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
                Ver recursos
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Sem mensalidade para começar</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Emita em minutos</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Dados salvos com segurança</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Suporte humano</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1400&auto=format&fit=crop" alt="Dashboard" className="rounded-xl object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-4 shadow-lg border border-slate-200">
              <p className="text-xs text-slate-500">Clientes satisfeitos</p>
              <p className="text-lg font-semibold">+5.000 empresas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
