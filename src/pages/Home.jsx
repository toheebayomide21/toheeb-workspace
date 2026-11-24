
import Navbar from '../components/layouts/navbar';
import Footer from '../components/layouts/footer';
import BackToTop from '../components/layouts/BackToTop';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Project';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}

export default Home;
