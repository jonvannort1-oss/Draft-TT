import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0B0E14] text-white">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/" className="text-emerald-400 hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                        <p className="mb-2">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name, email address, and phone number</li>
                            <li>Clinic or business information</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Communications with us</li>
                            <li>Usage data and analytics</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
                        <p className="mb-2">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send appointment reminders and service notifications</li>
                            <li>Respond to your comments and questions</li>
                            <li>Send marketing communications (with your consent)</li>
                            <li>Monitor and analyze usage patterns</li>
                            <li>Detect and prevent fraud and abuse</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
                        <p className="mb-2">We do not sell your personal information. We may share your information with:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Service providers who assist in our operations (e.g., payment processors, email services)</li>
                            <li>Professional advisors (lawyers, accountants)</li>
                            <li>Law enforcement when required by law</li>
                        </ul>
                        <p className="mt-4">
                            All third-party service providers are required to maintain the confidentiality of your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. SMS and Email Communications</h2>
                        <p>
                            When you provide your phone number or email address, you consent to receive communications from us.
                            This includes:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Transactional messages (appointment confirmations, reminders)</li>
                            <li>Service updates and notifications</li>
                            <li>Marketing messages (only with explicit consent)</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Your Rights:</strong> You can opt-out of marketing communications at any time by replying STOP to SMS
                            messages or clicking unsubscribe in emails. You will continue to receive transactional messages necessary
                            for the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information.
                            However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Retention</h2>
                        <p>
                            We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
                            When you cancel your account, we will delete or anonymize your data within 90 days, unless required to retain it by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Object to processing of your information</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us at the information below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">8. Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar tracking technologies to collect usage information and improve our services.
                            You can control cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">9. Children's Privacy</h2>
                        <p>
                            Our services are not directed to individuals under 18. We do not knowingly collect personal information
                            from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                            policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy or our data practices, please contact us:
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
