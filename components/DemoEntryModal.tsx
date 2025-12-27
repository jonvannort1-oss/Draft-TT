"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Building2 } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

interface DemoEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DemoEntryModal({ isOpen, onClose }: DemoEntryModalProps) {
    const [clinicName, setClinicName] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!clinicName.trim()) return;

        // Encode the clinic name for the URL
        const slug = encodeURIComponent(clinicName.trim());
        router.push(`/demo/${slug}`);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 z-50"
                    >
                        <Card className="border-emerald-500/20 bg-card shadow-2xl relative overflow-hidden">
                            {/* Decorative background gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />

                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </button>

                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2">
                                    <Building2 className="w-6 h-6 text-emerald-500" />
                                </div>
                                <CardTitle className="text-2xl">Personalize Your Demo</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-center text-muted-foreground mb-6">
                                    Enter your clinic's name to see how our system would look for your brand.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="e.g. Serenity Massage"
                                            value={clinicName}
                                            onChange={(e) => setClinicName(e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            autoFocus
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                        disabled={!clinicName.trim()}
                                    >
                                        Generate Demo <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
