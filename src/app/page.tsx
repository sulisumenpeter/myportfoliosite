import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Solutions from "@/components/Solutions";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Solutions />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
