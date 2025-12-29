// Landing Page 3: Retention
"use client";

import { useState } from "react";
import { Users, RefreshCw, ArrowRight, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function RetentionPage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white">
            {/* Hero */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Turn One-Time Clients Into Regulars
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Stop Losing Clients<br />
                    <span className="text-emerald-400">After One Visit</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Great session, but they never book again? Automated follow-ups keep you top-of-mind so clients come back.
                </p>

                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    See How It Works <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                    ✓ Automated rebooking  ✓ Personalized follow-ups  ✓ Works with Jane App
                </p>
            </section>

            {/* The Problem */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sound Familiar?</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Clients say "I'll book again soon" but never do</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">You're always hunting for new clients instead of keeping existing ones</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Life gets busy and they forget about you</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Calendar className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Smart Rebooking Reminders</h3>
                        <p className="text-gray-300">
                            Automated texts sent 2-4 weeks after their visit: "Ready for your next massage?"
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Personalized Follow-Ups</h3>
                        <p className="text-gray-300">
                            Thank-you messages after each visit. Clients feel valued, not forgotten.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <RefreshCw className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">One-Click Rebooking</h3>
                        <p className="text-gray-300">
                            Include your booking link in every message. They book in 30 seconds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
                    <p className="text-lg italic text-gray-200 mb-4">
                        "I used to lose so many clients after their first visit. Now the automated follow-ups bring them back. My regulars list has tripled."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                            LT
                        </div>
                        <div>
                            <p className="font-semibold">Lisa T.</p>
                            <p className="text-sm text-gray-400">RMT, Niagara Falls</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">See the Client Experience</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Try the demo and see how easy it is for clients to rebook.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}
