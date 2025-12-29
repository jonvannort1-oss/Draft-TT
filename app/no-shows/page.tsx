// Landing Page 1: No-Shows
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, CheckCircle2, Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function NoShowsPage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white">
            {/* Hero */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                    <Bell className="w-4 h-4 mr-2" />
                    Automated Reminders That Actually Work
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Never Chase Down<br />
                    <span className="text-emerald-400">No-Shows</span> Again
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Tired of empty appointment slots? Automated text reminders keep your calendar full, without the awkward follow-up calls.
                </p>

                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    See How It Works <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                    ✓ Works with Jane App  ✓ Setup in 7 days  ✓ No tech skills needed
                </p>
            </section>

            {/* The Pain */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sound Familiar?</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Clients say "I'll be there!" then ghost you</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">You spend hours calling/texting to confirm appointments</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Empty slots = lost income you can't get back</p>
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
                            <Bell className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Smart Reminders</h3>
                        <p className="text-gray-300">
                            Automated texts sent 48hrs, 24hrs, and 2hrs before appointments. Clients confirm with one tap.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">24/7 Booking Link</h3>
                        <p className="text-gray-300">
                            Share one link. Clients book anytime, anywhere, even at 11pm when they remember.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Calendar className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Syncs Everything</h3>
                        <p className="text-gray-300">
                            Works with Jane App, Google Calendar, and your existing tools. No double-booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
                    <p className="text-lg italic text-gray-200 mb-4">
                        "I used to spend 30 minutes every morning calling to confirm appointments. Now it's automatic. My no-shows dropped to almost zero."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                            SM
                        </div>
                        <div>
                            <p className="font-semibold">Sarah M.</p>
                            <p className="text-sm text-gray-400">RMT, St. Catharines</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Try the demo and see exactly what your clients will experience.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}
