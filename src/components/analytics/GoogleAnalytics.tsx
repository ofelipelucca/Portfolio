"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import * as gtag from "@/lib/gtag";

export function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isGaEnabled = process.env.NODE_ENV === "production" && !!gtag.GA_MEASUREMENT_ID;
    const [isGtagReady, setIsGtagReady] = useState(false);

    useEffect(() => {
        if (!isGaEnabled || !isGtagReady) return;
        const query = searchParams.toString();
        const url = pathname + (query ? `?${query}` : "");
        gtag.pageview(url);
    }, [pathname, searchParams, isGaEnabled, isGtagReady]);

    if (!isGaEnabled) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                onReady={() => setIsGtagReady(true)}
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        send_page_view: false,
                    });
                `}
            </Script>
        </>
    );
}