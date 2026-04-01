import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'accent' | 'gold' | 'outline'

type BadgeProps = {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-brand-surface border-brand-border text-brand-text2',
  accent:  'bg-brand-accent/10 border-brand-accent/30 text-brand-accent',
  gold:    'bg-brand-gold/10 border-brand-gold/30 text-brand-gold',
  outline: 'bg-transparent border-brand-border2 text-brand-text3',
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
