"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, Send, Loader2, User2, Activity } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

export function MockIntakeForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [pressure, setPressure] = useState(3);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    // Calculate color based on pressure (1-5)
    const getPressureColor = (value: number) => {
        const percentage = ((value - 1) / 4) * 100; // 0-100%
        if (percentage < 33) return 'rgb(34, 197, 94)'; // green
        if (percentage < 66) return 'rgb(234, 179, 8)'; // yellow
        return 'rgb(239, 68, 68)'; // red
    };

    return (
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <ClipboardList className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">Tell Us About Yourself</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-4">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-emerald-500">All Set!</h3>
                            <p className="text-muted-foreground">
                                Your intake form has been securely filed. Now pick a time that works for you! →
                            </p>
                            <Button
                                variant="outline"
                                className="mt-6"
                                onClick={() => { setIsSubmitted(false); setStep(1); }}
                            >
                                Reset Demo
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <User2 className="w-4 h-4 text-emerald-500" />
                                        First Name
                                    </label>
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <User2 className="w-4 h-4 text-emerald-500" />
                                        Last Name
                                    </label>
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                    Focus Areas
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Neck/Shoulders', 'Lower Back', 'Legs', 'Arms', 'Feet', 'Full Body'].map((part) => (
                                        <motion.label
                                            key={part}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-3 border border-border/50 rounded-lg p-3 hover:bg-emerald-500/10 hover:border-emerald-500/50 cursor-pointer transition-all group"
                                        >
                                            <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-emerald-500/50 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 bg-background checked:bg-emerald-600 checked:border-emerald-600 transition-all" />
                                            <span className="text-sm font-semibold group-hover:text-emerald-400 transition-colors">{part}</span>
                                        </motion.label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Massage Pressure Preference</label>
                                <div className="space-y-4 p-4 rounded-lg border border-input bg-background/50">
                                    <div className="relative h-2 rounded-full overflow-hidden">
                                        {/* Background track */}
                                        <div className="absolute inset-0 bg-white/10" />

                                        {/* Filled portion */}
                                        <div
                                            className="absolute left-0 top-0 h-full transition-all duration-300 bg-emerald-500/60"
                                            style={{
                                                width: `${((pressure - 1) / 4) * 100}%`,
                                            }}
                                        />

                                        {/* Actual input (invisible but functional) */}
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={pressure}
                                            onChange={(e) => setPressure(Number(e.target.value))}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            style={{ WebkitAppearance: 'none' }}
                                        />
                                    </div>

                                    {/* Visible custom thumb */}
                                    <div className="relative -mt-5 pointer-events-none">
                                        <div
                                            className="absolute w-6 h-6 rounded-full bg-white border-2 border-emerald-500 transition-all duration-300 shadow-lg"
                                            style={{
                                                left: `calc(${((pressure - 1) / 4) * 100}% - 12px)`,
                                                top: '-4px',
                                            }}
                                        />
                                    </div>

                                    <div className="flex justify-between text-xs text-muted-foreground pt-1">
                                        <span>Light</span>
                                        <span>Medium</span>
                                        <span>Deep</span>
                                    </div>
                                    <p className="text-center text-sm text-muted-foreground">
                                        Selected: <span className="font-semibold text-white">
                                            {pressure === 1 ? 'Very Light' : pressure === 2 ? 'Light' : pressure === 3 ? 'Medium' : pressure === 4 ? 'Firm' : 'Deep Tissue'}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-gray-50" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-gray-50" /> Processing...
                                    </>
                                ) : (
                                    <>
                                        Submit Intake <Send className="ml-2 w-4 h-4 text-gray-50" />
                                    </>
                                )}
                            </Button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
