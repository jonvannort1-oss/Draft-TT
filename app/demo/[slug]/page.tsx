"use client";

import { MockIntakeForm } from "@/components/MockIntakeForm";
import { MockServiceCalendar } from "@/components/MockServiceCalendar";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, HelpCircle, Sparkle, DollarSign, ClipboardList, Calendar } from "lucide-react";
import Link from "next/link";
import { HireMeModal } from "@/components/HireMeModal";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DemoPage() {
    const params = useParams();
    const clinicName = decodeURIComponent(params.slug as string);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white relative selection:bg-emerald-500/30 overflow-hidden">
            {/* Serene Background Hero Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/spa-hero.png"
                    alt="Serene spa atmosphere"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1612]/60 via-[#0d1f1a]/80 to-[#0B0E14]" />
            </div>

            {/* Top Banner - Demo Indicator */}
            <div className="sticky top-0 z-50 bg-red-900/70 backdrop-blur-xl border-b border-red-400/30 text-white px-4 py-3 shadow-2xl shadow-red-900/20">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Sparkles className="w-4 h-4 text-red-300" />
                        <span>Preview for <strong>{clinicName}</strong></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href={`/onboard?clinicName=${encodeURIComponent(clinicName)}`} className="text-sm text-red-200 hover:text-white transition-colors">
                            Exit Preview
                        </Link>
                        <Button size="sm" className="bg-white text-red-900 hover:bg-red-50 font-semibold shadow-sm" asChild>
                            <Link href={`/onboard?clinicName=${encodeURIComponent(clinicName)}`}>
                                Get This for My Clinic <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    {/* Clinic Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-lg">
                            {clinicName}
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-emerald-100/80 font-light max-w-2xl mx-auto leading-relaxed mb-8">
                        Your City's Premiere Massage & Wellness Clinic.
                        <span className="block mt-2 text-lg text-emerald-200/60">
                            Book your perfect escape in seconds.
                        </span>
                    </p>

                    {/* Liquid Glass Navigation Bar */}
                    <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert(`${clinicName}'s Services`); }}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
                        >
                            <ClipboardList className="w-4 h-4" /> Services
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert(`${clinicName}'s Pricing`); }}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
                        >
                            <DollarSign className="w-4 h-4" /> Pricing
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert(`${clinicName}'s About/FAQ`); }}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
                        >
                            <HelpCircle className="w-4 h-4" /> About/FAQ
                        </a>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Column 1: Intake */}
                    <div>
                        <MockIntakeForm />
                    </div>

                    {/* Column 2: Booking */}
                    <div>
                        <MockServiceCalendar />
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-emerald-200/60 text-sm mb-4">Ready to bring this experience to your clients?</p>
                    <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/20 text-gray-50" asChild>
                        <Link href={`/onboard?clinicName=${encodeURIComponent(clinicName)}`}>
                            Automate My Clinic <ArrowRight className="w-5 h-5 ml-2 text-gray-50" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Re-using the Hire Me Modal to capture the lead after they play with the demo */}
            <HireMeModal clinicName={clinicName} />
        </main>
    );
}
