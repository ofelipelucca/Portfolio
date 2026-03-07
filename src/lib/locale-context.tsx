"use client";

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Locale, translations } from "./i18n"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof translations["pt-BR"]
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt-BR")

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
