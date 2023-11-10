import { About } from "../About/About";
import { Contact } from '../Contact/Contact';
import { Experience } from '../Experience/Experience';
import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';


export default function Home() {
    return (
       <>
       <Hero />
       <About />
       <Experience />
       <Projects />
       <Contact />
       <Footer />
       </>
    );
}
