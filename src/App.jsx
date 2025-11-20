import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} NFS Rápida. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Termos</a>
            <a href="#" className="hover:text-slate-900">Privacidade</a>
            <a href="#contato" className="hover:text-slate-900">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
