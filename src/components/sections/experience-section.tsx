"use client";

import { useLocale } from "@/lib/locale-context"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const { t } = useLocale()

  return (
    <div className="flex items-start justify-center h-full px-4 md:px-8 pt-6 md:pt-0 md:items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-8 tracking-tight flex items-center gap-2">
          <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
          {t.experience.title}
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-4 md:gap-6">
            {t.experience.items.map((item, index) => (
              <div key={index} className="flex gap-3 md:gap-6 group">
                <div className="hidden md:flex flex-col items-center pt-1.5">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 ${
                      index === 0
                        ? "bg-primary border-primary"
                        : "bg-background border-border group-hover:border-muted-foreground"
                    } transition-colors z-10`}
                  />
                </div>

                <div className="flex-1 p-3 md:p-4 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-0.5 md:gap-4 mb-1.5">
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-card-foreground">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground font-mono">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap font-mono">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
