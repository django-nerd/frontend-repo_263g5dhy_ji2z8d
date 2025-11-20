const faqs = [
  {
    q: "É válido em todo o Brasil?",
    a: "Sim. Fazemos a ponte com as prefeituras compatíveis e emitimos conforme as regras locais.",
  },
  {
    q: "Preciso de certificado digital?",
    a: "Depende do município. Orientamos você durante o cadastro com as exigências de cada prefeitura.",
  },
  { q: "Consigo emitir como MEI?", a: "Sim, suportamos MEIs, autônomos e empresas de vários portes." },
  {
    q: "Posso emitir segunda via?",
    a: "Claro. Todo o histórico fica salvo e você pode reenviar para seus clientes a qualquer momento.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Dúvidas frequentes</h2>
          <p className="mt-3 text-slate-600">Se preferir, nosso time pode te ajudar por chat ou e-mail.</p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                {f.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
