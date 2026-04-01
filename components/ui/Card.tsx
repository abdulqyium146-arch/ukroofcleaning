import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  hover?: boolean
  children: React.ReactNode
}

export function Card({ className, hover = true, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-brand-surface border border-brand-border rounded-xl p-6',
        hover && 'transition-colors duration-200 hover:border-brand-border2',
        className,
      )}
    >
      {children}
    </div>
  )
}
