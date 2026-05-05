import { clsx } from 'clsx'

interface BadgeProps {
  label: string
  variant?: 'popular' | 'value' | 'default'
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variant === 'popular' && 'bg-blue-100 text-blue-700',
        variant === 'value' && 'bg-green-100 text-green-700',
        variant === 'default' && 'bg-zinc-100 text-zinc-600'
      )}
    >
      {label}
    </span>
  )
}
