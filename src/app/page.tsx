"use client"

import { useEffect, useState } from "react"
import { LocaleProvider, useLocale } from "@/lib/locale-context"
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

export default function Page() {
  return (
    <LocaleProvider>
      <PortfolioContent />
    </LocaleProvider>
  )
}

function PortfolioContent() {
  const { t } = useLocale()
  const [activeSection, setActiveSection] = useState<SectionId>("about")
  const ActiveComponent = SECTIONS[activeSection]

  const metadataMap: Record<SectionId, { title: string; description: string }> = {
    about: {
      title: `Felipe Lucca Taumaturgo | ${t.nav.about}`,
      description: t.hero.bio,
    },
    experience: {
      title: `Felipe Lucca Taumaturgo | ${t.nav.experience}`,
      description:
        t.experience.items
          .map((item) => `${item.role} @ ${item.company}`)
          .join(" • "),
    },
    projects: {
      title: `Felipe Lucca Taumaturgo | ${t.nav.projects}`,
      description:
        t.projects.items.map((p) => p.name + ": " + p.description).join(" • "),
    },
    stack: {
      title: `Felipe Lucca Taumaturgo | ${t.nav.stack}`,
      description: t.stack.title,
    },
  }

  useEffect(() => {
    const meta = metadataMap[activeSection]
    document.title = meta.title

    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute("content", meta.description)
  }, [activeSection, t])

  return (
    <>
      <div className="relative min-h-screen bg-background">
        <Navbar
          activeSection={activeSection}
          onSectionChange={(id) => setActiveSection(id as SectionId)}
        />

        <main
          className="overflow-y-auto"
          style={{
            paddingTop: 30,
            paddingBottom: 32,
            height: `calc(100vh - 88px)`,
          }}
        >
          <ActiveComponent />
        </main>

        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-center h-8 border-t border-border text-[10px] md:text-xs text-muted-foreground bg-background z-50">
          <p>{"Felipe Lucca Taumaturgo, "} {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}