import React from "react";
import Benefits from "./Benefits/Benefits";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import MbFooter from "./MobileFooter/MobileFooter";
import Navbar from "./Navbar/Navbar";
import Pricing from "./Pricing/Pricing";
import Testimonial from "./Testimonial/Testimonial";

// © 2025 pyrismarift. All rights reserved.

// Unauthorized copying, use, or modification of this file is prohibited.

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Testimonial />
      <HowItWorks />
      <Pricing />
      <Faq />
      <div className="hidden lg:grid">
        <Footer />
      </div>
      <div className="flex lg:hidden">
        <MbFooter />
      </div>
    </div>
  );
}
