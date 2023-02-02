import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Benefits from "./components/Benefits";
import Choose from "./components/Choose";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Consultation from "./components/Consultation";
import Services from "./components/Services";
import AboutDr from "./components/About_Doctor";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Treatments from "./components/Treatments";
import Data from "./Data.json";
import OnlineConsultation from "./components/OnlineConsultation";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        document.querySelector(".Nav_body").classList.remove("white_bg");
        // console.log("oh no");
      }

      if (document.documentElement.scrollTop + 1 > 1) {
        document.querySelector(".Nav_body").classList.add("white_bg");
        document.querySelector(".nav_item a").classList.add("white_bg_text");
        // console.log("oh yes "  + document.documentElement.scrollTop);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
            <About />
            <Benefits />
            <Services />
            <Choose />
            <Testimonials />
            <Articles />
            <Contact />
            <Consultation />
            <Footer />
          </Route>
          <Route path={"/about_doctor"}>
            <AboutDr />
            <Footer/>
          </Route>
          <Route path={"/onlineConsultation"}>
            <OnlineConsultation/>
            <Footer/>
          </Route>
          {Data.treatments.map((item, index) => {
            console.log(item.treatment_name.toLowerCase().toString());
            return (
              <Route
                key={index}
                path={`/${item.treatment_name.toLowerCase().toString()}`}
              >
                <Treatments data={item} />
                <Footer/>
              </Route>
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
