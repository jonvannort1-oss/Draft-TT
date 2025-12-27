"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { DemoEntryModal } from "./DemoEntryModal";

export function Hero() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <section className="relative overflow-hidden pt-20 pb-10 md:pt-32">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                            The Problem Every Clinic Faces
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent pb-1 leading-tight">
                            60-70% of Your Leads Are <br className="hidden md:block" />
                            <span className="text-white">Slipping Away</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                            While you're busy serving customers, your online inquiries are going unanswered.
                            Here's how we fix it with automated tech.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="h-12 px-8 rounded-full text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all" onClick={() => setIsDemoModalOpen(true)}>
                                <PlayCircle className="mr-2 w-5 h-5" /> Start Interactive Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right side visual / negative space for desktop balancing */}
                    {/* We can add a subtle visual here later if needed, but for now it balances the left alignment */}
                    <div className="lg:col-span-5 hidden lg:block relative h-full min-h-[400px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>

            {/* Background decoration - Adjusted position */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <DemoEntryModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </section>
    );
}
