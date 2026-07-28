interface SectionTitleProps {
  eyebrow: string
  title: string
  description: string
  count?: number
}

export function SectionTitle({ eyebrow, title, description, count }: SectionTitleProps) {
  return (
    <header className="section-title reveal">
      <div>
        <span className="section-title__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {typeof count === 'number' && <span className="section-title__count">{String(count).padStart(2, '0')}</span>}
    </header>
  )
}
