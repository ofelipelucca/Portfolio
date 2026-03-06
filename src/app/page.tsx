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

  const NAVBAR_HEIGHT = 56
  const FOOTER_HEIGHT = 32

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar
        activeSection={activeSection}
        onSectionChange={(id) => setActiveSection(id as SectionId)}
      />

      <main
        className="overflow-y-auto"
        style={{
          paddingTop: NAVBAR_HEIGHT,
          paddingBottom: FOOTER_HEIGHT,
          height: `calc(100vh - ${NAVBAR_HEIGHT + FOOTER_HEIGHT}px)`,
        }}
      >
        <ActiveComponent />
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex items-center justify-center h-8 border-t border-border text-[10px] md:text-xs text-muted-foreground bg-background z-50">
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