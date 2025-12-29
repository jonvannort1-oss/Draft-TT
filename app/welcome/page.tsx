"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, MessageSquare, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function WelcomePage() {
    const searchParams = useSearchParams();
    const firstName = searchParams.get("firstName") || "";
    const [showModal, setShowModal] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white selection:bg-emerald-500/30">
            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    TrueTrend Media
                </Link>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        {firstName ? `Welcome, ${firstName}!` : "Welcome!"}
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Thanks for connecting with us. We're excited to show you how TrueTrend can automate your clinic and save you 10+ hours every week.
                    </p>

                    <Button
                        onClick={() => setShowModal(true)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 text-gray-50"
                    >
                        <Calendar className="mr-2 w-5 h-5" />
                        Book Your Demo Call
                    </Button>
                </div>
            </section>

            {/* What to Expect */}
            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12">What Happens Next</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">1. Book Your Call</h3>
                        <p className="text-gray-400">
                            Choose a time that works for you. The call takes about 15 minutes.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">2. See the Demo</h3>
                        <p className="text-gray-400">
                            We'll show you exactly how it works for your clinic, with your branding.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">3. Get Set Up</h3>
                        <p className="text-gray-400">
                            If it's a fit, we'll have you up and running in less than 7 days.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compliance Footer */}
            <section className="container mx-auto px-4 py-12 max-w-4xl border-t border-gray-800">
                <div className="space-y-6">
                    {/* Consent Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="w-5 h-5 mt-1 rounded border-gray-600 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-400">
                            By checking this box, I consent to receive text messages and emails from TrueTrend Media about my account and services.
                            Message frequency may vary. Message & data rates may apply.
                            Reply STOP to opt-out or HELP for help.
                            I agree to the <Link href="/terms" className="text-emerald-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-emerald-400 hover:underline">Privacy Policy</Link>.
                        </span>
                    </label>

                    {/* Contact Info */}
                    <div className="text-sm text-gray-500 space-y-2">
                        <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Support: <a href="tel:2896721416" className="text-emerald-400 hover:underline">289-672-1416</a>
                        </p>
                        <p>
                            TrueTrend Media | Automated Booking & Marketing for Wellness Clinics
                        </p>
                        <p className="text-xs">
                            © {new Date().getFullYear()} TrueTrend Media. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>

            {/* Demo Modal */}
            <DemoEntryModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </main>
    );
}
