export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ""
declare global {
  interface Window {
    gtag?: (command: 'config' | 'event' | 'set', targetId: string, params?: Record<string, unknown>) => void
  }
}
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}