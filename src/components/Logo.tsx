interface LogoProps {
  className?: string
  compact?: boolean
}

export function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <a className={`brand ${className}`} href="#inicio" aria-label="SN Portfolio — voltar ao início">
      <img src={`${import.meta.env.BASE_URL}logo-sn.svg`} alt="Logo SN" />
      {!compact && <span>PORTFOLIO</span>}
    </a>
  )
}
