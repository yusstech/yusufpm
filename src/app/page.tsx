import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RecentProjects from "@/components/RecentProjects";
import WhatWeDo from "@/components/WhatWeDo";
import ClientsReviews from "@/components/ClientsReviews";
import BlogArticles from "@/components/BlogArticles";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AboutSection />
      <RecentProjects />
      <WhatWeDo />
      <ClientsReviews />
      <BlogArticles />
      <FooterSection />
    </main>
  );
}
