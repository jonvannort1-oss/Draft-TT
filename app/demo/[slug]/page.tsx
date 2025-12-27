import { MockIntakeForm } from "@/components/MockIntakeForm";
import { MockServiceCalendar } from "@/components/MockServiceCalendar";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { HireMeModal } from "@/components/HireMeModal";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function DemoPage(props: PageProps) {
    const params = await props.params;
    const clinicName = decodeURIComponent(params.slug);

    return (
        <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url('/spa-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Additional gradient overlay for readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

            {/* Top Banner / Overlay to remind them it's a demo */}
            <div className="sticky top-0 z-40 bg-indigo-900/95 backdrop-blur-md border-b border-indigo-500/30 text-white px-4 py-3 shadow-xl">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Sparkles className="w-4 h-4 text-indigo-300" />
                        <span>Viewing live demo for <strong>{clinicName}</strong></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-sm text-indigo-200 hover:text-white transition-colors">
                            Exit Demo
                        </Link>
                        <Button size="sm" className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold shadow-sm" asChild>
                            <Link href="/">
                                Onboard My Clinic <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="mb-12 relative">
                    <div className="relative inline-block max-w-full">
                        {/* pb-2 prevents descenders (g, j, p, q, y) from being clipped. break-words/break-all ensures long names wrap on mobile. */}
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-sm pb-2 leading-tight break-words hyphens-auto">
                            {clinicName}
                        </h1>

                        {/* Hand-drawn annotation - Positioned relative to the end of the text */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-8 hidden md:block rotate-6 whitespace-nowrap z-20">
                            <div className="relative">
                                {/* Arrow points from right to left. SVG starts at left:0, margin ensures 2rem gap. */}
                                <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-6 top-3 text-white/90">
                                    {/* Path starts at x=85 (right) and curves to x=5 (left) */}
                                    <path d="M85 5 Q 45 25 5 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead)" />
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                                <span className="font-['Caveat'] text-3xl text-white/90 block relative z-0 pl-10 pt-1">
                                    Your Logo Here
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-2xl text-emerald-100/80 mt-4 max-w-2xl font-light">
                        Where tranquility meets technology. Experience the future of your massage practice.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Column 1: Intake */}
                    <div className="space-y-6">
                        <div className="prose dark:prose-invert">
                            <h3>Smart Intake Forms</h3>
                            <p className="text-muted-foreground">
                                Replace clipboard and paper. Clients fill this out on their phone before they arrive, saving you 10-15 minutes per session.
                            </p>
                        </div>
                        <MockIntakeForm />
                    </div>

                    {/* Column 2: Booking */}
                    <div className="space-y-6">
                        <div className="prose dark:prose-invert">
                            <h3>24/7 Self-Booking</h3>
                            <p className="text-muted-foreground">
                                Fill your calendar while you sleep. Syncs perfectly with your availability so you never double-book.
                            </p>
                        </div>
                        <MockServiceCalendar />
                    </div>
                </div>
            </div>

            {/* Re-using the Hire Me Modal to capture the lead after they play with the demo */}
            <HireMeModal />
        </main>
    );
}
