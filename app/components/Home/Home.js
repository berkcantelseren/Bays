import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
