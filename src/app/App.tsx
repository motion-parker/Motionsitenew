import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Team />
      <FinalCTA />
    </div>
  );
}