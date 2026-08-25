function getInitial(name: string) {
  return name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() ?? ''
}

interface AvatarProps {
  name: string
  className?: string
}

export default function Avatar({ name, className = 'h-12 w-12 text-base' }: AvatarProps) {
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gold-100 font-semibold text-charcoal-800 ${className}`}
    >
      {getInitial(name)}
    </span>
  )
}
