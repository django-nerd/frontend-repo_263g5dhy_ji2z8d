import { FileCheck2, Building2, Clock, Headphones, LockKeyhole, ReceiptText, Rabbit, Fish } from "lucide-react"

const features = [
  {
    icon: FileCheck2,
    title: "Emissão simplificada",
    desc: "Interface clara e objetiva para gerar NFS-e sem erros",
  },
  {
    icon: Building2,
    title: "Integração com prefeituras",
    desc: "Compatível com os principais municípios do Brasil",
  },
  { icon: Clock, title: "Agilidade", desc: "Fluxo otimizado para emitir em minutos" },
  { icon: Headphones, title: "Suporte humano", desc: "Time pronto para ajudar por chat e e-mail" },
  { icon: LockKeyhole, title: "Segurança", desc: "Criptografia e backups para seus dados" },
  { icon: ReceiptText, title: "Histórico e segunda via", desc: "Acesse suas notas sempre que precisar" },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Tudo que você precisa para emitir NFS-e</h2>
          <p className="mt-3 text-slate-600">Uma experiência moderna pensada para autônomos, MEIs e empresas.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/5 group-hover:bg-fuchsia-500/10 blur-2xl" />
              <div className="h-11 w-11 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                <Rabbit className="h-4 w-4 text-fuchsia-700" />
                <Fish className="h-4 w-4 text-amber-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
