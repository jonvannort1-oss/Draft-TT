import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ComparisonSection />
      <ServicesGrid />
    </main>
  );
}
