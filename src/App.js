import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Choose from '../src/components/Choose';
import Testimonials from './components/Testimonials';
import ArticlesCard from './components/ArticlesCard';
import Consultation from './components/Consultation';
import AboutDr from './components/AboutDr';
import Faq from './components/Faq';
import Treatments from './components/Treatments';
import BlogMore from './components/BlogMore';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Benefits/>
      <Choose/>
      <Testimonials/>
      <ArticlesCard/>
      <Consultation/>
      <AboutDr/>
      <Faq/>
      <BlogMore/>

      <Treatments/>
      <About/>

      <Contact/>

    </div>
  );
}

export default App;
