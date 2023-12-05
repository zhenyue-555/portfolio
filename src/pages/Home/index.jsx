import { About } from "../About/About";
import { Contact } from '../Contact/Contact';
import { Experience } from '../Experience/Experience';
import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import  Todo  from "../Todo/Todo";


export default function Home() {
    return (
       <>
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <Projects />
       <Contact />
       <Todo />
       <Footer />
       </>
    );
}
