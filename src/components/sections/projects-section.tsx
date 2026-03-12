"use client";

import { useLocale } from "@/lib/locale-context"
import { FolderOpen, ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  const { t } = useLocale()

  return (
    <div className="flex items-start justify-center h-full px-4 md:px-8 pt-4 md:pt-0 md:items-center">
      <div className="max-w-5xl w-full">
        <h2 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6 tracking-tight flex items-center gap-2">
          <FolderOpen className="h-4 w-4 md:h-5 md:w-5" />
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
          {t.projects.items.map((project, index) => {
            const hasUrl = "url" in project && project.url

            const content = (
              <>
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="text-sm md:text-base font-semibold text-card-foreground group-hover:text-foreground transition-colors">
                    {project.name}
                  </h3>
                  {hasUrl && (
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-opacity shrink-0 mt-0.5" />
                  )}
                </div>
                {/* Descrição sempre completa */}
                <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 text-[9px] md:text-[10px] rounded bg-secondary text-secondary-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )

            const cardClasses =
              "group p-3 md:p-4 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-all block"

            return hasUrl ? (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {content}
              </a>
            ) : (
              <div key={index} className={cardClasses}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}