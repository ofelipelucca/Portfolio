"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import * as gtag from "../../lib/gtag";

export function GoogleAnalytics() {
    if (process.env.NODE_ENV !== "production" || !gtag.GA_MEASUREMENT_ID) return null;

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();
        gtag.pageview(url);
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
}