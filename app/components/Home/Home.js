import Benefits from "./Benefits/Benefits";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Navbar from "./Navbar/Navbar";
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
    </div>
  );
}
