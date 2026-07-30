import Section from '../components/Section'

export default function About(){
  return (
    <Section title="Sobre mim" subtitle="Quem eu sou e como trabalho.">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <h3 className="font-semibold">Bio curta</h3>
          <p className="mt-2 text-zinc-600 leading-relaxed">
            Sou desenvolvedor full‑stack com foco em interfaces elegantes e código limpo. Atuo com React, TypeScript, Node e melhores práticas de acessibilidade e performance.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Linguagens & Tecnologias</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-700">
            <li>TypeScript</li>
            <li>JavaScript (ESNext)</li>
            <li>React / Vite</li>
            <li>Node / Express</li>
            <li>Tailwind CSS</li>
            <li>Prisma / PostgreSQL</li>
            <li>Git / CI</li>
            <li>Testes (Vitest/Jest)</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}