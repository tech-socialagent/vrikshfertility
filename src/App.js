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
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
