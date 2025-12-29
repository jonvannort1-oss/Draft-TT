// Landing Page 2: Reviews
"use client";

import { useState } from "react";
import { Star, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoEntryModal } from "@/components/DemoEntryModal";

export default function ReviewsPage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1612] via-[#0d1f1a] to-[#0B0E14] text-white">
            {/* Hero */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Build Your Reputation Automatically
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Get More Google Reviews<br />
                    <span className="text-emerald-400">Without Asking</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Stop feeling awkward about asking for reviews. Automated follow-ups make it easy for happy clients to share their experience.
                </p>

                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    See How It Works <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                    ✓ Automated requests  ✓ One-click for clients  ✓ Works with Jane App
                </p>
            </section>

            {/* The Problem */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Why You're Stuck at 8 Reviews</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">Asking in person feels pushy (and they forget anyway)</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">You're too busy treating clients to chase reviews</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="text-red-400 mt-1">✗</div>
                            <p className="text-gray-300">New clients choose clinics with more reviews</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-emerald-400">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Client Finishes Session</h3>
                        <p className="text-gray-300">
                            They leave happy. No awkward ask at checkout.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-emerald-400">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Automated Text (24hrs Later)</h3>
                        <p className="text-gray-300">
                            "How was your massage? Leave a quick review!"
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-emerald-400">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">One-Tap Review</h3>
                        <p className="text-gray-300">
                            They click, write 2 sentences, done. You get a 5-star.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">What You Get</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Professional Follow-Up</p>
                                <p className="text-gray-300">Automated texts sent at the perfect time, when clients are still happy</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MessageSquare className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">One-Click Links</p>
                                <p className="text-gray-300">Direct link to your Google review page, no searching required</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Star className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">Build Trust</p>
                                <p className="text-gray-300">More reviews = more new clients finding you online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">See the Booking Experience</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Try the demo and see how easy it is for clients to leave reviews.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg text-gray-50" onClick={() => setIsDemoModalOpen(true)}>
                    Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}
