import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Woerkflow from "../components/Workflow";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing">

      <Navbar />

      <Hero />

      <Features />

      <Woerkflow />

    </div>
  );
}