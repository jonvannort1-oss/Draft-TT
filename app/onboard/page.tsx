"use client";

import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function OnboardForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlClinicName = searchParams.get("clinicName") || "";

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        clinicName: urlClinicName || '',
        email: '',
        phone: ''
    });

    const [emailWarning, setEmailWarning] = useState('');

    // Common email typos
    const emailTypos: Record<string, string> = {
        'gmial.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'gmil.com': 'gmail.com',
        'hitmail.com': 'hotmail.com',
        'hotmial.com': 'hotmail.com',
        'yaho.com': 'yahoo.com',
        'yahooo.com': 'yahoo.com',
        'outlok.com': 'outlook.com',
        'outloo.com': 'outlook.com',
    };

    // Validate email and check for typos
    const validateEmail = (email: string) => {
        const domain = email.split('@')[1]?.toLowerCase();
        if (!domain) return;

        // Check for common typos
        for (const [typo, correct] of Object.entries(emailTypos)) {
            if (domain === typo) {
                setEmailWarning(`Did you mean @${correct}?`);
                return;
            }
        }
        setEmailWarning('');
    };

    // Format phone number as (###) ###-####
    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 10); // Only digits, max 10
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === 'phone') {
            setFormData(prev => ({ ...prev, [id]: formatPhoneNumber(value) }));
        } else if (id === 'email') {
            setFormData(prev => ({ ...prev, [id]: value }));
            validateEmail(value);
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation check
        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.clinicName.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        // Format phone number: Send raw 10 digits only (no country code prefix)
        let formattedPhone = formData.phone.replace(/\D/g, ""); // Remove non-digits

        // If 11 digits starting with 1, strip the leading 1 to get 10 digits
        if (formattedPhone.length === 11 && formattedPhone.startsWith("1")) {
            formattedPhone = formattedPhone.substring(1);
        }
        // Otherwise, just use the digits as-is (should be 10 digits)

        // Construct query params
        const params = new URLSearchParams({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formattedPhone,
            organization: formData.clinicName,
            firstName: formData.firstName,
            lastName: formData.lastName,
            clinicName: formData.clinicName
        });

        router.push(`/schedule?${params.toString()}`);
    };

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white selection:bg-emerald-500/30 overflow-x-hidden">
            <header className="container mx-auto px-4 py-4">
                {/* Empty header for cleaner look */}
            </header>

            <div className="container mx-auto px-4 py-4 md:py-12 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Left Column: Value Prop */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                                Ready to Fill <span className="text-emerald-400">{urlClinicName ? `${urlClinicName}'s` : "Your"} Calendar</span> & Get More Reviews?
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                A professional booking experience that works 24/7, so you never miss an appointment.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 h-fit flex-shrink-0">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Setup in Less Than 7 Days</h3>
                                    <p className="text-muted-foreground">Full integration with your existing tools, Jane App, Google Calendar, and more.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 h-fit">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Free Strategy Session</h3>
                                    <p className="text-muted-foreground">Book a call and we'll create a custom plan based on your current tools and goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Intake Form / Scheduler Embed Payload */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">Secure Your Spot</h2>
                            <p className="text-muted-foreground text-sm">
                                Fill out the form below to schedule your technical onboarding.
                            </p>
                        </div>

                        {/* Real Form Logic */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="clinicName" className="text-sm font-medium text-gray-300">Clinic Name</label>
                                <input
                                    id="clinicName"
                                    type="text"
                                    required
                                    value={formData.clinicName}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                    placeholder="Ex. Tranquil Massage"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                    placeholder="jane@clinic.com"
                                />
                                {emailWarning && (
                                    <p className="text-sm text-yellow-400 flex items-center gap-1">
                                        ⚠️ {emailWarning}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                    placeholder="(555) 000-0000"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-14 mt-4 text-lg shadow-lg shadow-emerald-500/20">
                                Book Onboarding Call <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-xs text-center text-muted-foreground mt-4">
                                By clicking above, you agree to our Terms. Your data is secure.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function OnboardPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0B0E14]" />}>
            <OnboardForm />
        </Suspense>
    );
}
