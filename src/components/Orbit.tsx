import type { CSSProperties, ReactNode } from 'react'
import { Braces, Cloud, Code, Database, Layers } from './Icons'

interface OrbitTechnology {
  label: string
  angle: number
  ring: 'outer' | 'inner'
  icon: ReactNode
}

const technologies: OrbitTechnology[] = [
  { label: 'React', angle: -90, ring: 'outer', icon: <Layers /> },
  { label: 'TypeScript', angle: -22, ring: 'outer', icon: <Braces /> },
  { label: 'Cloudflare', angle: 35, ring: 'outer', icon: <Cloud /> },
  { label: 'JavaScript', angle: 92, ring: 'outer', icon: <Code /> },
  { label: 'HTML / CSS', angle: 150, ring: 'outer', icon: <Code /> },
  { label: 'D1 / APIs', angle: 208, ring: 'outer', icon: <Database /> },
  { label: 'Motion', angle: 22, ring: 'inner', icon: <Layers /> },
  { label: 'UI Design', angle: 195, ring: 'inner', icon: <Braces /> },
]

function OrbitItem({ item }: { item: OrbitTechnology }) {
  const style = {
    '--orbit-angle': `${item.angle}deg`,
  } as CSSProperties

  return (
    <div className="orbit-item" style={style}>
      <div className="orbit-pill">
        <span className="orbit-pill__icon">{item.icon}</span>
        <span>{item.label}</span>
      </div>
    </div>
  )
}

export function Orbit() {
  const outer = technologies.filter((technology) => technology.ring === 'outer')
  const inner = technologies.filter((technology) => technology.ring === 'inner')

  return (
    <div className="orbit" aria-label="Tecnologias em movimento ao redor da logo SN">
      <div className="orbit__grid" />
      <div className="orbit__glow orbit__glow--one" />
      <div className="orbit__glow orbit__glow--two" />

      <div className="orbit-ring orbit-ring--outer">
        <div className="orbit-track orbit-track--outer">
          {outer.map((item) => (
            <OrbitItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="orbit-ring orbit-ring--middle" />

      <div className="orbit-ring orbit-ring--inner">
        <div className="orbit-track orbit-track--inner">
          {inner.map((item) => (
            <OrbitItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="orbit-core">
        <div className="orbit-core__halo" />
        <img src={`${import.meta.env.BASE_URL}logo-sn.svg`} alt="SN" />
      </div>
    </div>
  )
}
