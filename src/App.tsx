import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'CREATECH SYSTEMS';
  }, []);

  return (
    <div className="font-montserrat text-light-dark bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;