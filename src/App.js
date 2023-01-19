import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Choose from './components/Choose';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Consultation from './components/Consultation';
import Services from './components/Services';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        document.querySelector(".Nav_body").classList.remove("white_bg");
        // console.log("oh no");
      }
      
      if (
        document.documentElement.scrollTop + 1 >
        1
      ) {
        document.querySelector(".Nav_body").classList.add("white_bg");
        document.querySelector(".nav_item a").classList.add("white_bg_text");

        // console.log("oh yes "  + document.documentElement.scrollTop);
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Benefits/>
      <Services/>
      <Choose/>
      <Testimonials/>
      <Articles/>
      <Contact/>
      <Consultation/>
      <Footer/>
    </div>
  );
}

export default App;
