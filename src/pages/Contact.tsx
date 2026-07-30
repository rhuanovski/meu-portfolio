import {Send } from 'lucide-react'
import Section from '../components/Section'
import Spacer from '../components/Spacer';

export default function Contact(){
  return (
    <Section title="Contato" subtitle="Vamos conversar sobre o seu projeto?">
      <div className="grid md:grid-cols-2 gap-8">
        <form className="card p-6 space-y-4" action="https://formsubmit.co/SEU_EMAIL" method="POST">
          <input type="hidden" name="_subject" value="Novo contato pelo portfólio" />
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="text-sm text-zinc-600">Nome</label>
            <input required name="name" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label className="text-sm text-zinc-600">E‑mail</label>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label className="text-sm text-zinc-600">Mensagem</label>
            <textarea required name="message" rows={4} className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <button className="btn btn-primary w-full" type="submit">Enviar <Spacer />   <Send size={16}/> </button> 
        </form>
        <div className="card p-6 space-y-3">
          <h3 className="font-semibold">Redes & Contato</h3>
          <ul className="text-zinc-700 text-sm space-y-2">
            <li><a className="link" href="https://w.app/z3tncm" target="_blank" rel="noreferrer"><p style={{ textDecoration: 'underline' }}>WhatsApp</p></a></li>
            <li><a className="link" href="mailto:rhuanfeitoza1@gmail.com"><p style={{ textDecoration: 'underline' }}>rhuanfeitoza1@gmail.com</p></a></li>
            <li><a className="link" href="https://github.com/rhuanovski" target="_blank" rel="noreferrer"><p style={{ textDecoration: 'underline' }}>GitHub</p></a></li>
            <li><a className="link" href="https://linkedin.com/in/rhuan-carlos-vieira-feitoza" target="_blank" rel="noreferrer"><p style={{ textDecoration: 'underline' }}>LinkedIn</p></a></li>
          </ul>
          <div className="pt-2 text-sm text-zinc-500">
            Preferências: reuniões por Google Meet, propostas em PDF e cronograma claro.
          </div>
        </div>
      </div>
    </Section>
  )
}

