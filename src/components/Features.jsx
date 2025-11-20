import { FileCheck2, Building2, Clock, Headphones, LockKeyhole, ReceiptText } from "lucide-react"

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
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Tudo que você precisa para emitir NFS-e</h2>
          <p className="mt-3 text-slate-600">Uma experiência moderna pensada para autônomos, MEIs e empresas.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
