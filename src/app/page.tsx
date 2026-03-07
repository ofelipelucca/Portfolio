"use client";

import { useEffect, useMemo, useState } from "react"
import { LocaleProvider, useLocale } from "@/lib/locale-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
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

  const metadataMap: Record<SectionId, { title: string; description: string }> = useMemo(() => ({
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
  }), [t])

  useEffect(() => {
    const meta = metadataMap[activeSection]
    document.title = meta.title

    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute("content", meta.description)
  }, [activeSection, metadataMap])

  return (
    <>
      <div className="relative min-h-screen bg-background flex flex-col">
        <Navbar
          activeSection={activeSection}
          onSectionChange={(id) => setActiveSection(id as SectionId)}
        />

        <main className="flex-1 flex items-center justify-center overflow-y-auto pt-8 pb-8">
          <ActiveComponent />
        </main>

        <Footer />
      </div>
    </>
  )
}