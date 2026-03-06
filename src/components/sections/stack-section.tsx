"use client"

import { useLocale } from "@/lib/locale-context"
import { Layers } from "lucide-react"

export function StackSection() {
  const { t } = useLocale()

  return (
    <div className="flex items-start justify-center h-full px-4 md:px-8 pt-6 md:pt-0 md:items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-8 tracking-tight flex items-center gap-2">
          <Layers className="h-4 w-4 md:h-5 md:w-5" />
          {t.stack.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {t.stack.categories.map((category) => (
            <div
              key={category.name}
              className="p-3 md:p-5 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-colors"
            >
              <h3 className="text-xs md:text-sm font-semibold text-card-foreground mb-2 md:mb-3 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-[10px] md:text-xs rounded-md bg-secondary text-secondary-foreground font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
