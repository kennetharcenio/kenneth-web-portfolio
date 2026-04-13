import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <div className="container">
        <Nav />
        <Hero />
        <Stats />
        <Skills />
        <SideProjects />
        <section id="work">
          <Projects />
        </section>
        <Timeline />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
