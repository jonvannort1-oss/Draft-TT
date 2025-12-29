// Landing Page 4: Time Savings
"use client";

import { useState } from "react";
import { Clock, Zap, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function TimeSavingsPage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white">
            {/* Hero */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                    <Zap className="w-4 h-4 mr-2" />
                    Get Your Time Back
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Stop Spending Hours on<br />
                    <span className="text-emerald-400">Admin Work</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Tired of playing phone tag and sending reminder texts? Automation handles the busy work so you can focus on your clients.
                </p>

                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    See How It Works <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                    ✓ 24/7 booking  ✓ Auto reminders  ✓ Works with Jane App
                </p>
            </section>

            {/* The Problem */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Your Day Shouldn't Look Like This</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">30 minutes every morning calling to confirm appointments</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Playing phone tag with clients trying to book</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Manually sending reminder texts one by one</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">What Gets Automated</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">24/7 Online Booking</h3>
                        <p className="text-gray-300">
                            Clients book themselves anytime. No more phone tag or missed calls.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Auto Confirmations</h3>
                        <p className="text-gray-300">
                            Reminders sent automatically. Clients confirm with one tap.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Calendar Sync</h3>
                        <p className="text-gray-300">
                            Syncs with Jane App, Google Calendar, and more. No double-booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">What You Get Back</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Hours Every Week</p>
                                <p className="text-gray-300">No more manual reminders, confirmations, or phone calls</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Peace of Mind</p>
                                <p className="text-gray-300">Everything runs automatically, even when you're with a client</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Professional Image</p>
                                <p className="text-gray-300">Instant confirmations and reminders make you look more established</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Try the demo and see how smooth the booking experience is.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}
