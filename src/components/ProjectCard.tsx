import { useRef, type CSSProperties, type MouseEvent } from 'react'
import type { Project } from '../data/projects'
import { ArrowUpRight } from './Icons'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectPreview({ project }: { project: Project }) {
  const visual = project.visual ?? 'dashboard'

  return (
    <div className="browser-mockup" aria-hidden="true">
      <div className="browser-mockup__dots"><i /><i /><i /></div>
      <span className="browser-mockup__line browser-mockup__line--primary" />
      <span className="browser-mockup__line browser-mockup__line--secondary" />

      {visual === 'feedback' && (
        <div className="browser-mockup__feedback">
          <div className="browser-mockup__stars"><i /><i /><i /><i /><i /></div>
          <div className="browser-mockup__feedback-bars"><i /><i /></div>
        </div>
      )}

      {visual === 'gallery' && (
        <div className="browser-mockup__gallery"><i /><i /><i /></div>
      )}

      {visual === 'chat' && (
        <div className="browser-mockup__chat"><i /><i /><i /></div>
      )}

      {visual === 'dashboard' && (
        <div className="browser-mockup__cards"><i /><i /><i /></div>
      )}
    </div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null)
  const style = {
    '--accent': project.accent,
    '--accent-rgb': project.accentRgb,
    '--delay': `${Math.min(index * 90, 420)}ms`,
  } as CSSProperties

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const element = cardRef.current
    if (!element || window.matchMedia('(pointer: coarse)').matches) return

    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    const rotateY = (px - 0.5) * 9
    const rotateX = (0.5 - py) * 8

    element.style.setProperty('--mx', `${px * 100}%`)
    element.style.setProperty('--my', `${py * 100}%`)
    element.style.setProperty('--rx', `${rotateX}deg`)
    element.style.setProperty('--ry', `${rotateY}deg`)
    element.style.setProperty('--lift', '-8px')
    element.classList.add('is-interacting')
  }

  const resetPointer = () => {
    const element = cardRef.current
    if (!element) return
    element.style.setProperty('--rx', '0deg')
    element.style.setProperty('--ry', '0deg')
    element.style.setProperty('--lift', '0px')
    element.classList.remove('is-interacting')
  }

  const content = (
    <div className="project-card__tilt">
      <span className="project-card__spotlight" aria-hidden="true" />
      <div className="project-card__visual">
        <div className="project-card__motion" aria-hidden="true"><i /><i /><i /></div>
        <div className="project-card__status">
          <span className="status-dot" />
          {project.status === 'ready' ? 'Pronto' : 'Em criação'}
        </div>
        <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-card__mockup-float"><ProjectPreview project={project} /></div>
        {project.status === 'building' && <span className="building-label">building</span>}
      </div>

      <div className="project-card__body">
        <span className="project-card__eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__footer">
          <div className="project-card__tags">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <span className="project-card__arrow" aria-hidden="true"><ArrowUpRight /></span>
        </div>
      </div>
    </div>
  )

  if (project.url) {
    return (
      <a
        ref={(node) => { cardRef.current = node }}
        className="project-card reveal"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        style={style}
        aria-label={`Abrir projeto ${project.title}`}
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointer}
      >
        {content}
      </a>
    )
  }

  return (
    <article
      ref={(node) => { cardRef.current = node }}
      className="project-card project-card--building reveal"
      style={style}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
    >
      {content}
    </article>
  )
}
