"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ChevronRight, Check } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { cn } from "@/lib/utils";

const timeSlots = [
    "9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"
];

const dates = [
    { day: "Mon", date: "12" },
    { day: "Tue", date: "13" },
    { day: "Wed", date: "14", isActive: true },
    { day: "Thu", date: "15" },
    { day: "Fri", date: "16" },
];

export function MockServiceCalendar() {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    return (
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <CalendarIcon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">Book Appointment</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                {/* Date Strip */}
                <div className="flex justify-between mb-6">
                    {dates.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col items-center justify-center w-12 h-14 rounded-xl border border-transparent transition-all cursor-pointer",
                                item.isActive
                                    ? "bg-primary text-primary-foreground shadow-lg scale-110"
                                    : "bg-muted/30 hover:bg-muted text-muted-foreground"
                            )}
                        >
                            <span className="text-[10px] font-medium uppercase">{item.day}</span>
                            <span className="text-lg font-bold">{item.date}</span>
                        </div>
                    ))}
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                            <motion.button
                                key={time}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedSlot(time)}
                                className={cn(
                                    "p-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 transition-all",
                                    selectedSlot === time
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border/50 hover:border-primary/50 hover:bg-secondary/50"
                                )}
                            >
                                <Clock className="w-3 h-3" /> {time}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <Button className="w-full" disabled={!selectedSlot}>
                        {selectedSlot ? `Confirm ${selectedSlot}` : "Select a Time"} <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                {selectedSlot && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1"
                    >
                        <Check className="w-3 h-3 text-emerald-500" /> Auto-synced with Google Calendar
                    </motion.p>
                )}
            </CardContent>
        </Card>
    );
}
