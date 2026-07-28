import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'
import { ArrowUpRight } from './Icons'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const style = {
    '--accent': project.accent,
    '--accent-rgb': project.accentRgb,
  } as CSSProperties

  const content = (
    <>
      <div className="project-card__visual">
        <div className="project-card__status">
          <span className="status-dot" />
          {project.status === 'ready' ? 'Pronto' : 'Em criação'}
        </div>
        <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
        <div className="browser-mockup" aria-hidden="true">
          <div className="browser-mockup__dots"><i /><i /><i /></div>
          <span className="browser-mockup__line browser-mockup__line--primary" />
          <span className="browser-mockup__line browser-mockup__line--secondary" />
          <div className="browser-mockup__cards"><i /><i /><i /></div>
        </div>
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
    </>
  )

  if (project.url) {
    return (
      <a
        className="project-card reveal"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        style={style}
        aria-label={`Abrir projeto ${project.title}`}
      >
        {content}
      </a>
    )
  }

  return (
    <article className="project-card project-card--building reveal" style={style}>
      {content}
    </article>
  )
}
