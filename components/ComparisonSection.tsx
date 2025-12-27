"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, CloudLightning, Clock, ShieldCheck, PhoneMissed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

export function ComparisonSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Reality Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-background border-border h-full relative overflow-hidden group hover:border-destructive/50 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-destructive/10 text-destructive">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-destructive">The Reality</h3>
                                </div>
                                <CardTitle className="text-5xl font-bold text-white mb-2">
                                    4+ Hours
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Average response time, but 78% of customers choose the first business to respond.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-gray-400">
                                            <PhoneMissed className="w-5 h-5 text-destructive shrink-0" />
                                            Staff miss inquiries during off-hours and weekends
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-gray-400">
                                            <Clock className="w-5 h-5 text-destructive shrink-0" />
                                            Busy serving customers while online leads go cold
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Our Solution Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="bg-background border-border h-full relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-500">Our Solution</h3>
                                </div>
                                <CardTitle className="text-5xl font-bold text-white mb-2">
                                    24/7
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    AI assistant responds within seconds, books appointments while you sleep.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-gray-400">
                                            <CloudLightning className="w-5 h-5 text-emerald-500 shrink-0" />
                                            Instantly qualifies leads and books appointments
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-gray-400">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                            Integrates with your CRM and calendar system
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
