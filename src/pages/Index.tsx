import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

const Home = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + location.pathname : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recruit41 — AI Interview Platform</title>
        <meta name="description" content="Recruit41 delivers structured, bias-aware AI interviews at scale. Speed up hiring with automation and fair, data-backed evaluations." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Recruit41',
          url: canonical,
          logo: '/favicon.ico',
          sameAs: []
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Recruit41',
          description: 'AI interview platform for structured, fair, and scalable hiring',
          brand: { '@type': 'Brand', name: 'Recruit41' }
        })}</script>
      </Helmet>

      <Navbar />

      <Hero />

      <SocialProof />

      <Features />

      <Pricing />

      <CTA />


      <Footer />
    </div>
  );
};

export default Home;
