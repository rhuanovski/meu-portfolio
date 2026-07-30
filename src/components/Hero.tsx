import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section pt-20 pb-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
          <span className="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-semibold">
            Engenheiro da computação e desenvolvedor full-stack
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Soluções digitais com <span className="text-brand-600">excelência</span> e design sofisticado
          </h1>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Eu crio experiências web modernas, acessíveis e performáticas — do conceito ao deploy. Veja meus projetos e entre em contato para levar sua ideia ao próximo nível.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projects" className="btn btn-primary">Ver projetos <ArrowRight size={18}/></Link>
            <Link to="/contact" className="btn btn-ghost">Orçar um projeto</Link>
          </div>
        </motion.div>
       
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative isolate"
>
 
  <div className="relative rounded-[28px] overflow-visible">
  
    <img
      src="/profile.png"
      alt="Rhuan Carlos — Desenvolvedor"
      className="relative z-20 block w-full h-[420px] md:h-[460px] object-cover rounded-[inherit]"
      loading="eager"
      decoding="async"
    />

    <div
      className="absolute inset-[-2px] rounded-[inherit] p-[3px] pointer-events-none z-30 opacity-90"
      style={{
        background: "#6837f2",
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
      }}
    />
  </div>

  <div className="absolute -bottom-6 -right-6 hidden md:block z-40">
    <div className="card p-4">
      <p className="text-sm text-zinc-600">Habilidades: Python • SwiftUI • React • TypeScript • Tailwind</p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}
