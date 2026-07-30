export default function Footer(){
  return (
    <footer className="border-t border-zinc-100 mt-10">
      <div className="section py-10 text-sm text-zinc-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} • Rhuan Carlos — Todos os direitos reservados.</p>
        <p>
          Esse site foi construído com <span className="text-brand-600 font-medium">React + TypeScript + Tailwind</span>
        </p>
      </div>
    </footer>
  )
}

