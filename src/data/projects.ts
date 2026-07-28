export type ProjectStatus = 'ready' | 'building'
export type ProjectVisual = 'dashboard' | 'feedback' | 'gallery' | 'chat'

export interface Project {
  id: number
  title: string
  eyebrow: string
  description: string
  status: ProjectStatus
  technologies: string[]
  accent: string
  accentRgb: string
  visual?: ProjectVisual
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
    visual: 'dashboard',
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
    visual: 'dashboard',
    url: 'https://tecnoshop.snkmataxit.workers.dev/',
  },
  {
    id: 3,
    title: 'AmorSaúde Feedback',
    eyebrow: 'Avaliação de pacientes',
    description:
      'Sistema responsivo de avaliações com QR Code, notas por setor, comentários, filtros, gráficos e painel administrativo.',
    status: 'ready',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'D1'],
    accent: '#ff4d67',
    accentRgb: '255, 77, 103',
    visual: 'feedback',
    url: 'https://asfreedback.snakerr77.workers.dev/public/feedback',
  },
  {
    id: 4,
    title: 'KFStudios',
    eyebrow: 'Portfólio de fotografia',
    description:
      'Experiência visual para fotografia com coleções, contato por WhatsApp, identidade rosa e apresentação responsiva.',
    status: 'ready',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    accent: '#ff65c3',
    accentRgb: '255, 101, 195',
    visual: 'gallery',
    url: 'https://snakerr77-spec.github.io/KFSTUDIOS/',
  },
  {
    id: 5,
    title: 'Netuno IA',
    eyebrow: 'Interface de inteligência artificial',
    description:
      'Assistente de IA com identidade orbital, chat futurista, navegação fluida e uma experiência visual imersiva.',
    status: 'building',
    technologies: ['JavaScript', 'UI Design', 'Motion'],
    accent: '#6d76ff',
    accentRgb: '109, 118, 255',
    visual: 'chat',
  },
  {
    id: 6,
    title: 'Pastelaria Digital',
    eyebrow: 'Cardápio online',
    description:
      'Cardápio rápido e responsivo para pastelaria, com categorias, detalhes dos produtos e experiência otimizada para celular.',
    status: 'building',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    accent: '#ffb21c',
    accentRgb: '255, 178, 28',
    visual: 'dashboard',
  },
  {
    id: 7,
    title: 'Servia',
    eyebrow: 'IA para programadores',
    description:
      'Produto conceitual de inteligência artificial para desenvolvimento, com chat, ferramentas técnicas e identidade neon.',
    status: 'building',
    technologies: ['UI', 'Chat', 'JavaScript'],
    accent: '#b15cff',
    accentRgb: '177, 92, 255',
    visual: 'chat',
  },
]

export const readyProjects = projects.filter((project) => project.status === 'ready')
export const buildingProjects = projects.filter((project) => project.status === 'building')
