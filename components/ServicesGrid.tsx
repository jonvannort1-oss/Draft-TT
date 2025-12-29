"use client";

import { motion } from "framer-motion";
import { Layout, Calendar, MessageSquareText, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const services = [
    {
        title: "High-Converting Landing Pages",
        description: "Beautiful, fast, and mobile-optimized pages designed to turn visitors into booked appointments.",
        icon: Layout,
    },
    {
        title: "Smart Booking System",
        description: "Seamless calendar integration that lets clients book 24/7 without back-and-forth emails.",
        icon: Calendar,
    },
    {
        title: "Automated Follow-Up",
        description: "Instant SMS & Email responses to new leads ensuring you never miss a potential client.",
        icon: MessageSquareText,
    },
];

export function ServicesGrid() {
    return (
        <section className="py-20 bg-black/20">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to Grow</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A complete digital infrastructure for your massage clinic.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card/50 border-border hover:bg-card hover:border-primary/20 transition-all duration-300 h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
