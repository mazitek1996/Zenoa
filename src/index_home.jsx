import React from "react";

import Hero from "./components/home/hero_section";
import PartnerSection from "./components/home/partner_section";
import TestimonialsSection from "./components/home/testimonials_section";
import ServicesSection from "./components/home/service_section";
import AboutUsSection from "./components/home/about_section";
import CaseStudySection from "./components/home/case_study";
import ProductSection from "./components/home/product_section";
import BlogSection from "./components/home/blog_section";
import MediaSection from "./components/home/media_section";
import TeamSection from "./components/home/team_section";
import TechStack from "./components/home/techstack_section";

const Home = () => {
  return (
    <div>
      <div >
            <Hero />
            <PartnerSection />
            <AboutUsSection />
            <ServicesSection />

            <TestimonialsSection />
            <ProductSection />
            <TechStack />
            <CaseStudySection />
            <TeamSection />

            <MediaSection />
            <BlogSection />
        {/* Add other components as per your website design */}
      </div>
    </div>
  );
};

export default Home;
