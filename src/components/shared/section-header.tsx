interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
      {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
