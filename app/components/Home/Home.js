import Benefits from "./Benefits/Benefits";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Navbar from "./Navbar/Navbar";
import Pricing from "./Pricing/Pricing";
import Testimonial from "./Testimonial/Testimonial";

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
      <Footer />
    </div>
  );
}
