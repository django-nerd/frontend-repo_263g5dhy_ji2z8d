import { PawPrint } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-600/10 blur-3xl" />
          <div className="max-w-3xl relative">
            <h2 className="text-3xl font-bold text-slate-900">Pronto para emitir sua NFS-e?</h2>
            <p className="mt-3 text-slate-600">Crie sua conta agora e faça sua primeira emissão gratuitamente.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="Seu e-mail" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30">
                <PawPrint className="h-5 w-5" /> Criar conta
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">Ao continuar, você concorda com nossos termos e política de privacidade.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
