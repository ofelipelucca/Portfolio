"use client"

import { useState } from "react"
import { LocaleProvider } from "@/lib/locale-context"
import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { StackSection } from "@/components/sections/stack-section"

const SECTIONS = {
  about: HeroSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  stack: StackSection,
} as const

type SectionId = keyof typeof SECTIONS

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<SectionId>("about")
  const ActiveComponent = SECTIONS[activeSection]

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-background">
      <Navbar
        activeSection={activeSection}
        onSectionChange={(id) => setActiveSection(id as SectionId)}
      />

      <main className="flex-1 overflow-hidden">
        <ActiveComponent />
      </main>

      <footer className="flex items-center justify-center h-8 border-t border-border text-[10px] md:text-xs text-muted-foreground bg-background">
        <p>
          {"Felipe Lucca Taumaturgo, "} {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default function Page() {
  return (
    <LocaleProvider>
      <PortfolioContent />
    </LocaleProvider>
  )
}
