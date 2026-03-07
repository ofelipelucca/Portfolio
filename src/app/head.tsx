import { useLocale } from "@/lib/locale-context"

export default function Head() {
    const { t } = useLocale()
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Felipe Lucca Taumaturgo",
                        url: "https://ofelipelucca.vercel.app",
                        sameAs: [
                            "https://github.com/ofelipelucca",
                            "https://www.linkedin.com/in/felipe-lucca-taumaturgo-de-oliveira"
                        ],
                        jobTitle: t.hero.role
                    }),
                }}
            />
        </>
    )
}