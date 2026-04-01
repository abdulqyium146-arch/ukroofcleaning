import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-accent hover:bg-brand-accentDim text-white',
  ghost: 'border border-brand-border hover:border-brand-border2 text-brand-text1',
  outline: 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-xs min-h-[38px]',
  md:  'px-6 py-3 text-sm min-h-[48px]',
  lg:  'px-8 py-4 text-base min-h-[56px]',
}

const base = 'inline-flex items-center justify-center gap-2 font-body font-medium uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
