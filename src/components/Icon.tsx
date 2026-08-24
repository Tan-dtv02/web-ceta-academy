export type IconName =
  | 'briefcase'
  | 'book'
  | 'check'
  | 'shield'
  | 'clock'
  | 'users'
  | 'badge'
  | 'menu'
  | 'close'
  | 'arrow-right'

interface IconProps {
  name: IconName
  className?: string
}

export default function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'briefcase':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5z" />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common} strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15.5 14.2c2.4.4 4.5 2.6 4.5 5.8" />
        </svg>
      )
    case 'badge':
      return (
        <svg {...common}>
          <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3z" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common} strokeWidth={2}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common} strokeWidth={2}>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common} strokeWidth={2}>
          <line x1="4" y1="12" x2="20" y2="12" />
          <path d="M14 6l6 6-6 6" />
        </svg>
      )
  }
}
