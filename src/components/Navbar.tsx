import { Link, NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-100">
      <div className="section h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand-500 grid place-items-center text-white font-bold">👨🏻‍💻</div>
          <span className="font-semibold tracking-tight">Rhuan Carlos portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Início</NavItem>
          <NavItem to="/projects">Projetos</NavItem>
          <NavItem to="/articles">Artigos</NavItem>
          <NavItem to="/about">Sobre</NavItem>
          <NavItem to="/contact">Contato</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <a className="btn btn-ghost" href="https://github.com/rhuanovski" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
          <a className="btn btn-ghost" href="https://linkedin.com/in/rhuan-carlos-vieira-feitoza" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a className="btn btn-primary" href="mailto:rhuanfeitoza1@gmail.com" aria-label="E-mail"><Mail size={18}/> Fale comigo</a>
        </div>
      </div>
    </header>
  )
}

function NavItem({ to, children }:{ to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({isActive})=>
        `px-3 py-2 rounded-xl text-sm font-medium hover:bg-zinc-50 ${isActive? 'text-brand-700' : 'text-zinc-700'}`}
    >{children}</NavLink>
  )
}