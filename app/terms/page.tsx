import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0B0E14] text-white">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/" className="text-emerald-400 hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using TrueTrend Media's services, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Services Provided</h2>
                        <p>
                            TrueTrend Media provides automated booking, patient intake, and marketing services for wellness clinics.
                            Services include but are not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Automated booking systems</li>
                            <li>Patient intake form automation</li>
                            <li>SMS and email communication services</li>
                            <li>Review generation and management</li>
                            <li>Integration with practice management software</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. SMS and Email Communications</h2>
                        <p className="mb-2">
                            By providing your phone number and email address, you consent to receive:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Appointment confirmations and reminders</li>
                            <li>Service updates and notifications</li>
                            <li>Marketing communications (with your consent)</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Opt-Out:</strong> You may opt-out at any time by replying STOP to any SMS message or clicking unsubscribe in any email.
                            Message frequency may vary. Message and data rates may apply.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. User Responsibilities</h2>
                        <p>You agree to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Not use our services for any unlawful purpose</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">5. Payment Terms</h2>
                        <p>
                            Service fees are billed monthly or as otherwise agreed upon. Payment is due upon receipt of invoice.
                            We reserve the right to suspend services for non-payment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">6. Cancellation and Refunds</h2>
                        <p>
                            You may cancel your service at any time with 30 days' notice. Refunds are provided on a case-by-case basis
                            and are not guaranteed. Setup fees are non-refundable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
                        <p>
                            TrueTrend Media shall not be liable for any indirect, incidental, special, or consequential damages
                            arising from the use of our services. Our total liability shall not exceed the amount paid for services
                            in the preceding 12 months.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of our services after changes
                            constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Information</h2>
                        <p>
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <p className="mt-2">
                            Phone: <a href="tel:2896721416" className="text-emerald-400 hover:underline">289-672-1416</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
