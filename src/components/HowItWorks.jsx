import { Fingerprint, FileSignature, Send, Check, Cat, Dog } from "lucide-react"

const steps = [
  { icon: Fingerprint, title: "Cadastre-se", desc: "Crie sua conta em segundos" },
  { icon: FileSignature, title: "Preencha os dados", desc: "Informações do prestador, tomador e serviço" },
  { icon: Send, title: "Emita a NFS-e", desc: "Gere a nota e envie para seu cliente" },
  { icon: Check, title: "Acompanhe", desc: "Histórico e segunda via sempre disponíveis" },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-x-0 -top-10 mx-auto h-40 w-[90%] rounded-3xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Como funciona</h2>
          <p className="mt-3 text-slate-600">Um passo a passo simples para você emitir sua nota.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{i + 1}. {s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              {i === 0 && <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500"><Cat className="h-4 w-4 text-indigo-600" /> Rápido como um gato</div>}
              {i === 2 && <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500"><Dog className="h-4 w-4 text-fuchsia-700" /> Confiável como um cão</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
