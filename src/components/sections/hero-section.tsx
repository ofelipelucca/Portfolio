"use client"

import Image from "next/image"
import { useLocale } from "@/lib/locale-context"
import { MapPin, Mail, Github, Linkedin, GraduationCap } from "lucide-react"

const GITHUB_AVATAR_URL = "https://avatars.githubusercontent.com/u/128730767?v=4"
const EMAIL = "felipe.lucca.t.oliveira@gmail.com"
const GITHUB_URL = "https://github.com/ofelipelucca"
const LINKEDIN_URL = "https://www.linkedin.com/in/felipe-lucca-taumaturgo-de-oliveira"

export function HeroSection() {
  const { t } = useLocale()

  return (
    <div className="flex items-center justify-center h-full px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-4xl w-full">
        <div className="relative shrink-0">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border">
            <Image
              src={GITHUB_AVATAR_URL}
              alt="Felipe Lucca Taumaturgo"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4 text-center md:text-left">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Felipe Lucca Taumaturgo
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1 font-mono">
              {t.hero.role}
            </p>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-lg">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {t.hero.location}
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap className="h-3 w-3" />
              {t.education.degree} - {t.education.school}
            </span>
            <span className="flex items-center gap-1">
              <span className="sr-only">English proficiency</span>
              C2 English
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail className="h-3 w-3" />
              {t.hero.contact}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
