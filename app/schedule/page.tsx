"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

function SchedulePageContent() {
    const searchParams = useSearchParams();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Get user details from URL for potential usage/confirmation
    const firstName = searchParams.get("firstName") || "";
    const clinicName = searchParams.get("clinicName") || "";
    // Note: The GHL embed script often handles URL params automatically if they match standard keys
    // We are passing them in the URL which is the standard way GHL widgets pick them up.

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white selection:bg-emerald-500/30 flex flex-col">
            <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <div className="text-center mb-10 space-y-5">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        {firstName ? `${firstName}, You're` : "You're"} Almost There
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                            In less than 7 days, <span className="text-emerald-400 font-semibold">{clinicName || "your clinic"}</span> could have a beautiful, fully automated booking and follow-up system.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            The best part? It installs seamlessly alongside your existing tools and EMR systems.
                        </p>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            No gimmicks. No robots calling your clients. Just a seamless and unforgettable experience.
                        </p>
                        <div className="pt-2">
                            <p className="text-lg md:text-xl text-emerald-400 font-semibold">
                                Book your setup call below. Let's do this. 🚀
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl min-h-[700px]">
                    <iframe
                        src={`https://api.leadconnectorhq.com/widget/booking/lGzVVFd7LHYgo7gLGxrV?${searchParams.toString()}`}
                        style={{ width: "100%", border: "none", height: "100vh", minHeight: "800px" }}
                        scrolling="yes"
                        id="lGzVVFd7LHYgo7gLGxrV_1766851261475"
                        ref={iframeRef}
                    ></iframe>
                    <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
                </div>
            </div>
        </main>
    );
}

export default function SchedulePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0B0E14] flex items-center justify-center text-white">Loading...</div>}>
            <SchedulePageContent />
        </Suspense>
    );
}
