"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ChevronRight, ChevronLeft, Check, PartyPopper } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { cn } from "@/lib/utils";

const timeSlots = [
    "9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getWeekDates(weekOffset: number) {
    const today = new Date();
    const startOfWeek = new Date(today);
    // Start from Sunday of current week
    const dayOfWeek = today.getDay();
    startOfWeek.setDate(today.getDate() - dayOfWeek + (weekOffset * 7));

    const dates = [];
    for (let i = 0; i < 7; i++) { // Sun-Sat
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        dates.push({
            day: dayNames[date.getDay()],
            date: date.getDate(),
            month: monthNames[date.getMonth()],
            fullDate: date,
            isToday: date.toDateString() === today.toDateString()
        });
    }
    return dates;
}

export function MockServiceCalendar() {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [weekOffset, setWeekOffset] = useState(0);
    const [activeDateIndex, setActiveDateIndex] = useState<number | null>(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const dates = getWeekDates(weekOffset);

    // Auto-select today if it's in the current week view
    useState(() => {
        const todayIndex = dates.findIndex(d => d.isToday);
        if (todayIndex !== -1) {
            setActiveDateIndex(todayIndex);
        }
    });

    const handleConfirm = () => {
        if (selectedSlot && activeDateIndex !== null) {
            setIsConfirmed(true);
        }
    };

    const handleReset = () => {
        setIsConfirmed(false);
        setSelectedSlot(null);
        setWeekOffset(0);
        setActiveDateIndex(null);
    };

    const selectedDate = activeDateIndex !== null ? dates[activeDateIndex] : null;

    return (
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <CalendarIcon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">Reserve Your Spot</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <AnimatePresence mode="wait">
                    {isConfirmed ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-4">
                                <PartyPopper className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-emerald-500">See You Soon!</h3>
                            <div className="bg-muted/30 rounded-lg p-4 mb-4 text-left space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Date:</span> {selectedDate?.day}, {selectedDate?.month} {selectedDate?.date}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Time:</span> {selectedSlot}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Duration:</span> 60 minutes
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Confirmation #:</span> <span className="font-mono">HRB-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
                                </p>
                            </div>
                            <p className="text-xs text-muted-foreground mb-4">
                                A confirmation email has been sent to your inbox.
                            </p>
                            <Button
                                variant="outline"
                                onClick={handleReset}
                            >
                                Reset Demo
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Week Navigation */}
                            <div className="flex items-center justify-between mb-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setWeekOffset(prev => Math.max(0, prev - 1))}
                                    disabled={weekOffset === 0}
                                    className="p-2"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <span className="text-sm text-muted-foreground font-medium">
                                    {weekOffset === 0 ? "This Week" : weekOffset === 1 ? "Next Week" : `${weekOffset} Weeks Out`}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setWeekOffset(prev => prev + 1)}
                                    className="p-2"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Date Strip */}
                            <div className="flex justify-between mb-6">
                                {dates.map((item, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveDateIndex(i)}
                                        className={cn(
                                            "flex flex-col items-center justify-center w-12 h-14 rounded-xl border transition-all cursor-pointer relative",
                                            i === activeDateIndex
                                                ? "bg-primary text-primary-foreground shadow-lg scale-110 border-primary"
                                                : "bg-muted/30 hover:bg-muted text-muted-foreground border-transparent",
                                            item.isToday && i !== activeDateIndex && "border-primary/50"
                                        )}
                                    >
                                        <span className="text-[10px] font-medium uppercase">{item.day}</span>
                                        <span className="text-lg font-bold">{item.date}</span>
                                        {item.isToday && (
                                            <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                                        )}
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
                                <Button className="w-full" disabled={!selectedSlot || activeDateIndex === null} onClick={handleConfirm}>
                                    {selectedSlot ? `Confirm ${selectedSlot}` : "Select a Time"} <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Always show auto-sync text */}
                            <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                                <Check className="w-3 h-3 text-emerald-500" /> Auto-syncs with Google Calendar, Outlook, iCloud & Calendly
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
