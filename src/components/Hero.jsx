import { CheckCircle2, ShieldCheck, PawPrint, Squirrel, Bird } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[700px] w-[1400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/25 via-fuchsia-600/20 to-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[1600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "24px 24px"}} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              <ShieldCheck className="h-4 w-4 text-indigo-600" /> Conformidade com prefeituras em todo o Brasil
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Emita NFS-e com a leveza de um pássaro e a agilidade de um felino
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Uma plataforma moderna, bonita e intuitiva. Rápida como um guepardo, confiável como uma matilha.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-amber-500/30">
                Começar agora
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
                Ver recursos
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Sem mensalidade para começar</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Emita em minutos</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Dados salvos com segurança</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Suporte humano</div>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-500">
              <div className="inline-flex items-center gap-2"><PawPrint className="h-4 w-4 text-amber-600" /> Amigável como um labrador</div>
              <div className="inline-flex items-center gap-2"><Squirrel className="h-4 w-4 text-fuchsia-700" /> Ágil como um esquilo</div>
              <div className="hidden sm:inline-flex items-center gap-2"><Bird className="h-4 w-4 text-indigo-600" /> Leve como um colibri</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <img src="https://images.unsplash.com/photo-1754415690134-23879e247649?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmltYWwlMjBpbGx1c3RyYXRpb258ZW58MHwwfHx8MTc2MzY3Mzc2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Animal illustration" className="rounded-xl object-cover" />
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
