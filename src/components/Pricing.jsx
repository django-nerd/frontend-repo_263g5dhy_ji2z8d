import { Turtle, Whale } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Planos simples e transparentes</h2>
          <p className="mt-3 text-slate-600">Comece grátis e pague conforme emitir.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Grátis</p>
            <p className="mt-2 text-4xl font-bold text-slate-900">R$ 0</p>
            <p className="text-sm text-slate-600">Para experimentar</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• 5 NFS-e por mês</li>
              <li>• Suporte por e-mail</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">Começar</a>
          </div>

          <div className="relative rounded-2xl border border-fuchsia-200 bg-gradient-to-b from-white to-fuchsia-50 p-6 shadow-sm ring-1 ring-fuchsia-500/10">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-amber-400/30 blur-2xl" />
            <p className="text-sm font-semibold text-fuchsia-700">Profissional</p>
            <p className="mt-2 text-4xl font-bold text-slate-900">R$ 49<span className="text-base font-medium text-slate-600">/mês</span></p>
            <p className="text-sm text-slate-600">Para autônomos e MEIs</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• NFS-e ilimitada</li>
              <li>• Suporte prioritário</li>
              <li>• Histórico completo</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30">Assinar</a>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500"><Turtle className="h-4 w-4 text-indigo-700" /> Sem travar, sem lentidão</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Empresas</p>
            <p className="mt-2 text-4xl font-bold text-slate-900">Sob consulta</p>
            <p className="text-sm text-slate-600">Time e integrações</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Usuários múltiplos</li>
              <li>• Integração API</li>
              <li>• SLA dedicado</li>
            </ul>
            <a href="#contato" className="mt-6 inline-flex w-full justify-center rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">Falar com vendas</a>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500"><Whale className="h-4 w-4 text-amber-600" /> Escala para grandes volumes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
