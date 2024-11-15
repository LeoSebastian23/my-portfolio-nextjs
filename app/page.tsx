// app/page.tsx

import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <Hero  />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}







