export type ProjectStatus = 'ready' | 'building'

export interface Project {
  id: number
  title: string
  eyebrow: string
  description: string
  status: ProjectStatus
  technologies: string[]
  accent: string
  accentRgb: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'LAG Controller',
    eyebrow: 'Sistema para clínicas',
    description:
      'Painel interno completo para gestão de unidades, indicadores, treinamentos, documentos, perfis e rotinas clínicas.',
    status: 'ready',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'D1'],
    accent: '#2196ff',
    accentRgb: '33, 150, 255',
    url: 'https://amorsaudeexp4.snakerr77.workers.dev',
  },
  {
    id: 2,
    title: 'Tecnoshop Cerquilho',
    eyebrow: 'Vitrine de produtos',
    description:
      'Loja-vitrine tecnológica com catálogo, categorias, busca, tema claro/escuro e painel para gerenciamento de produtos.',
    status: 'ready',
    technologies: ['React', 'TypeScript', 'Vite', 'Cloudflare'],
    accent: '#27e3ad',
    accentRgb: '39, 227, 173',
    url: 'https://snakerr77-spec.github.io/technoshopp/',
  },
  {
    id: 3,
    title: 'Netuno IA',
    eyebrow: 'Interface de inteligência artificial',
    description:
      'Assistente de IA com identidade orbital, chat futurista, navegação fluida e uma experiência visual imersiva.',
    status: 'building',
    technologies: ['JavaScript', 'UI Design', 'Motion'],
    accent: '#6d76ff',
    accentRgb: '109, 118, 255',
  },
  {
    id: 4,
    title: 'Pastelaria Digital',
    eyebrow: 'Cardápio online',
    description:
      'Cardápio rápido e responsivo para pastelaria, com categorias, detalhes dos produtos e experiência otimizada para celular.',
    status: 'building',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    accent: '#ffb21c',
    accentRgb: '255, 178, 28',
  },
  {
    id: 5,
    title: 'Servia',
    eyebrow: 'IA para programadores',
    description:
      'Produto conceitual de inteligência artificial para desenvolvimento, com chat, ferramentas técnicas e identidade neon.',
    status: 'building',
    technologies: ['UI', 'Chat', 'JavaScript'],
    accent: '#b15cff',
    accentRgb: '177, 92, 255',
  },
]

export const readyProjects = projects.filter((project) => project.status === 'ready')
export const buildingProjects = projects.filter((project) => project.status === 'building')
