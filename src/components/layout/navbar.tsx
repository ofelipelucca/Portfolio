"use client"

import { useTheme } from "next-themes"
import { useLocale } from "@/lib/locale-context"
import { Sun, Moon, Globe } from "lucide-react"

type NavbarProps = {
  activeSection: string
  onSectionChange: (section: string) => void
}

const SECTION_IDS = ["about", "experience", "projects", "stack"] as const

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  const sectionLabels: Record<string, string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    stack: t.nav.stack,
  }

  function handleToggleLocale() {
    setLocale(locale === "pt-BR" ? "en-US" : "pt-BR")
  }

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 h-14 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center gap-1 md:gap-2">
        <span className="font-semibold text-sm md:text-base text-foreground mr-2 md:mr-6 tracking-tight font-mono">
          {"FL."}
        </span>
        {SECTION_IDS.map((id) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`px-2 md:px-3 py-1.5 text-xs md:text-sm rounded-md transition-colors cursor-pointer ${
              activeSection === id
                ? "bg-primary text-primary-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            {sectionLabels[id]}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <button
          onClick={handleToggleLocale}
          className="flex items-center gap-1 px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors cursor-pointer"
          aria-label="Toggle language"
        >
          <Globe className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">
            {locale === "pt-BR" ? "PT" : "EN"}
          </span>
        </button>
        <button
          onClick={handleToggleTheme}
          className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-3.5 w-3.5" />
          ) : (
            <Moon className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </header>
  )
}