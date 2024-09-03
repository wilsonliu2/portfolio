import Navigation from "./sections/Navigation";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="mx-auto mt-32 max-w-screen-sm">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
