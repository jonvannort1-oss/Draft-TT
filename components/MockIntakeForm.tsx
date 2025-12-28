"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

export function MockIntakeForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
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
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Focus Areas</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Lower Back', 'Neck/Shoulders', 'Legs', 'Full Body'].map((area) => (
                                        <label key={area} className="flex items-center space-x-2 border rounded-md p-2 hover:bg-muted/50 cursor-pointer transition-colors">
                                            <input type="checkbox" className="rounded border-gray-400" />
                                            <span className="text-sm">{area}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Massage Pressure preference</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    className="w-full accent-primary"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Light</span>
                                    <span>Firm</span>
                                    <span>Deep</span>
                                </div>
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                                    </>
                                ) : (
                                    <>
                                        Submit Intake <Send className="ml-2 w-4 h-4" />
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
