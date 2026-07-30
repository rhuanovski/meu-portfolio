export default function Section({ id, title, subtitle, children }:{
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}){
  return (
    <section id={id} className="section py-14">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-zinc-600">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}