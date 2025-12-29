// Landing Page 5: Competition
"use client";

import { useState } from "react";
import { TrendingUp, Target, ArrowRight, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function CompetitionPage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white">
            {/* Hero */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Stand Out From the Competition
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Look as Professional as<br />
                    <span className="text-emerald-400">The Big Franchises</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    New spas and franchises have slick websites and online booking. You should too, without the enterprise price tag.
                </p>

                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    See How It Works <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                    ✓ Professional booking  ✓ Works with Jane App  ✓ Setup in 7 days
                </p>
            </section>

            {/* The Problem */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">The Competition Is Getting Tougher</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">New franchises have fancy websites and instant booking</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Clients expect to book online, not play phone tag</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">You're losing clients to clinics that "look more professional"</p>
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
                            <Globe className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Professional Booking Page</h3>
                        <p className="text-gray-300">
                            A beautiful, mobile-friendly booking experience that rivals any franchise.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Automated Follow-Ups</h3>
                        <p className="text-gray-300">
                            Reminders, thank-yous, and review requests, all automatic.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Easy to Share</h3>
                        <p className="text-gray-300">
                            One link for Instagram, Google, your website, everywhere.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Why This Matters</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">First Impressions Count</p>
                                <p className="text-gray-300">Clients judge your professionalism before they even book</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Globe className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Meet Client Expectations</p>
                                <p className="text-gray-300">Modern clients expect online booking, it's not optional anymore</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Target className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Level the Playing Field</p>
                                <p className="text-gray-300">Compete with franchises without spending thousands on tech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">See What Your Clients Will Experience</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Try the demo and see how professional your booking page can look.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}
