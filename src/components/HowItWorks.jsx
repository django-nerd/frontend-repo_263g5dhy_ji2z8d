import { Fingerprint, FileSignature, Send, Check } from "lucide-react"

const steps = [
  { icon: Fingerprint, title: "Cadastre-se", desc: "Crie sua conta em segundos" },
  { icon: FileSignature, title: "Preencha os dados", desc: "Informações do prestador, tomador e serviço" },
  { icon: Send, title: "Emita a NFS-e", desc: "Gere a nota e envie para seu cliente" },
  { icon: Check, title: "Acompanhe", desc: "Histórico e segunda via sempre disponíveis" },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Como funciona</h2>
          <p className="mt-3 text-slate-600">Um passo a passo simples para você emitir sua nota.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{i + 1}. {s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
