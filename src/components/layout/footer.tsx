"use client";

export function Footer() {
    return (
        <footer className="flex items-center justify-center h-8 border-t border-border text-[10px] md:text-xs text-muted-foreground bg-background">
            <p className="font-mono tracking-tight">
                Felipe Lucca Taumaturgo, {new Date().getFullYear()}
            </p>
        </footer>
    )
}