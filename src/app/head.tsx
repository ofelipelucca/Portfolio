import { translations } from "@/lib/i18n"

export default function Head() {
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
                        jobTitle: translations["pt-BR"].hero.role
                    }),
                }}
            />
        </>
    )
}