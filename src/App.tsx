import { useEffect, useState } from 'react'
import { Logo } from './components/Logo'
import { Orbit } from './components/Orbit'
import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'
import {
  ArrowRight,
  ArrowUpRight,
  Close,
  Code,
  Github,
  Layers,
  Mail,
  Menu,
  Sparkles,
} from './components/Icons'
import { buildingProjects, readyProjects } from './data/projects'
import { profile } from './data/profile'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
]

const stack = [
  'React',
  'TypeScript',
  'JavaScript',
  'Vite',
  'HTML',
  'CSS',
  'Cloudflare',
  'D1',
  'APIs',
  'GitHub',
  'Motion',
  'UI Design',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="page-noise" aria-hidden="true" />

      <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
        <div className="topbar__inner container">
          <Logo compact />

          <nav className={`navigation ${menuOpen ? 'navigation--open' : ''}`} aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>

          <div className="topbar__actions">
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="Abrir GitHub">
              <Github />
            </a>
            {profile.linkedin && (
              <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn">
                in
              </a>
            )}
            <a className="button button--small button--outline topbar__contact" href="#contato">
              Vamos conversar <ArrowUpRight />
            </a>
            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content container">
            <div className="hero__copy reveal is-visible">
              <span className="kicker"><span /> Olá, eu sou</span>
              <h1>Desenvolvedor <strong>Full Stack</strong></h1>
              <p>
                Crio sistemas, sites e experiências digitais modernas, rápidas e desenvolvidas para resolver problemas reais.
              </p>
              <div className="hero__buttons">
                <a className="button button--primary" href="#projetos">Ver projetos <ArrowRight /></a>
                <a className="button button--ghost" href="#sobre">Sobre mim</a>
              </div>
              <div className="hero__stats" aria-label="Resumo do portfólio">
                <div><strong>{String(readyProjects.length).padStart(2, '0')}</strong><span>Projetos prontos</span></div>
                <div><strong>{String(buildingProjects.length).padStart(2, '0')}</strong><span>Em criação</span></div>
              </div>
            </div>

            <div className="hero__orbit reveal is-visible">
              <Orbit />
            </div>
          </div>
          <a className="scroll-indicator" href="#projetos" aria-label="Ir para os projetos">
            <span>Explorar</span><i />
          </a>
        </section>

        <section className="projects-section" id="projetos">
          <div className="container">
            <SectionTitle
              eyebrow="Portfólio"
              title="Prontos"
              description="Projetos concluídos, funcionais e publicados. Clique em um card para abrir o projeto."
              count={readyProjects.length}
            />
            <div className="projects-grid projects-grid--ready">
              {readyProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="building-heading reveal">
              <div className="building-heading__icon"><Sparkles /></div>
              <div>
                <span>Laboratório SN</span>
                <h2>Em criação</h2>
                <p>Projetos que estão sendo planejados, construídos e aprimorados.</p>
              </div>
              <div className="building-heading__pulse"><i /><i /><i /></div>
            </div>

            <div className="projects-grid projects-grid--building">
              {buildingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={readyProjects.length + index} />
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <span className="section-title__eyebrow">Sobre o desenvolvimento</span>
              <h2>Do conceito ao sistema funcionando.</h2>
              <p>
                Meu trabalho combina identidade visual, experiência do usuário e desenvolvimento. Cada projeto nasce de uma necessidade e evolui até se tornar uma solução prática, responsiva e preparada para publicação.
              </p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                Ver meus códigos no GitHub <ArrowUpRight />
              </a>
            </div>

            <div className="process-grid">
              <article className="process-card reveal">
                <span>01</span><Sparkles />
                <h3>Ideia e direção</h3>
                <p>Definição do problema, do público e da identidade visual do projeto.</p>
              </article>
              <article className="process-card reveal">
                <span>02</span><Layers />
                <h3>Interface e experiência</h3>
                <p>Construção de layouts responsivos, claros e pensados para uso real.</p>
              </article>
              <article className="process-card reveal">
                <span>03</span><Code />
                <h3>Código e publicação</h3>
                <p>Desenvolvimento, testes, otimização e deploy em plataformas modernas.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="technology-section" id="tecnologias">
          <div className="container">
            <SectionTitle
              eyebrow="Stack e ferramentas"
              title="Tecnologias"
              description="Ferramentas que fazem parte da criação dos meus projetos."
            />
          </div>
          <div className="marquee" aria-label="Tecnologias utilizadas">
            <div className="marquee__track">
              {[...stack, ...stack].map((technology, index) => (
                <span key={`${technology}-${index}`}><i />{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container">
            <div className="contact-card reveal">
              <div className="contact-card__glow" aria-hidden="true" />
              <div>
                <span className="section-title__eyebrow">Novo projeto</span>
                <h2>Vamos transformar uma ideia em uma solução digital?</h2>
                <p>Veja meus projetos, acompanhe meu trabalho e entre em contato para conversar sobre uma nova criação.</p>
              </div>
              <div className="contact-card__actions">
                <a className="button button--primary" href={profile.github} target="_blank" rel="noreferrer">
                  Abrir GitHub <Github />
                </a>
                {profile.email && (
                  <a className="button button--outline" href={`mailto:${profile.email}`}>
                    Enviar e-mail <Mail />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo compact />
          <p>© {new Date().getFullYear()} SN Portfolio. Desenvolvido com React, TypeScript e Vite.</p>
          <a href="#inicio">Voltar ao topo <ArrowUpRight /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
