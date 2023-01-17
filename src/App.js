import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Choose from './components/Choose';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Benefits/>
      <Choose/>
      <Testimonials/>
      <Articles/>
      <Contact/>
    </div>
  );
}

export default App;
