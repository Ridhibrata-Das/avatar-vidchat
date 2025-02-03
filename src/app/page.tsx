import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import FeatureBreakdown from '@/components/FeatureBreakdown';
import SecurityCompliance from '@/components/SecurityCompliance';
import InteractiveDemo from '@/components/InteractiveDemo';
import AssessmentFlow from '@/components/AssessmentFlow';
import TherapeuticBenefits from '@/components/TherapeuticBenefits';
import SupportResources from '@/components/SupportResources';
import SupportOverlay from '@/components/SupportOverlay';
import TechnicalRequirements from '@/components/TechnicalRequirements';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SupportBanner from '@/components/SupportBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SupportBanner />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <FeatureBreakdown />
        <SecurityCompliance />
        <InteractiveDemo />
        <AssessmentFlow />
        <TherapeuticBenefits />
        <SupportResources />
        <TechnicalRequirements />
      </main>
      <Footer />
    </div>
  );
} 