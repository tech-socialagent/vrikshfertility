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
import Blogpage from "./components/Blogpage";
import FaqPage from "./components/FaqPage";
import AboutVriksh from "./components/AboutVriksh";
import ContactPage from "./components/ContactPage";
import BlogMore from "./components/Blogmore";
import PrivacyNpolicy from "./components/PrivacyNpolicy";
import TermsNconditions from "./components/TermsNconditions";
import { BsWhatsapp } from "react-icons/bs";
import PageNotFound from "./components/PageNotFound";
import OurDoctors from "./components/OurDoctors";
import Thankyou from "./components/Thankyou";
import OurDoctors_Page from "./components/OurDoctors_Page";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

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
        {/* whatsapp */}
        <a
          href="https://wa.me/+918797080808"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="whatsapp-icon" />
        </a>

        <Navbar />

        <Switch>
          <Route exact path={"/"}>
            <Home />
            <About />
            <OurDoctors/>
            <Services />
            <Benefits />
            <Choose />
            <Testimonials />
            <Articles />
            <Contact />
            <Consultation />
            <Footer />
          </Route>
          {/* <Route path={"/onlineConsultation"}>
            <OnlineConsultation />
            <Footer />
          </Route> */}
          {/* <Route path={"/team_values"}>
            <TeamValue />
            <Footer />
          </Route> */}
          <Route path={"/about_clinical_director"}>
            <AboutDr />
            <Footer />
          </Route>
          <Route path={"/blogs"}>
            <Blogpage />
            <Footer />
          </Route>
          <Route path={"/about_vriksh"}>
            <AboutVriksh />
            <Footer />
          </Route>
          <Route path={"/about_doctors"}>
            <OurDoctors_Page/>
          </Route>
          <Route path={"/contactus"}>
            <ContactPage />
            <Footer />
          </Route>
          <Route path={"/faqs"}>
            <FaqPage />
            <Footer />
          </Route>
          {Data.landingPage.article_section.articles.map((item, index) => {
            return (
              <Route path={"/" + item.more_link} key={index}>
                <BlogMore blogdata={item} />
                <Footer />
              </Route>
            );
          })}
          <Route path={"/thankyou"}>
            <Thankyou/>
            <Footer/>
          </Route>
          {/* blogs */}
          <Route path={"/blog1"}>
            <BlogMore />
          </Route>
          {/* privacy policy */}
          <Route path={"/privacyandpolicy"}>
            <PrivacyNpolicy />
            <Footer />
          </Route>
          <Route path={"/termsandconditions"}>
            <TermsNconditions />
            <Footer />
          </Route>

          {Data.treatments.map((item, index) => {
            // console.log(
            //   item.treatment_name.split(" ").join("_").toLowerCase().toString()
            // );
            return (
              <Route
                key={index}
                path={`/${item.treatment_name
                  .replace(/[^a-zA-Z0-9 ]/g, " ")
                  .split(" ")
                  .join("_")
                  .toLowerCase()
                  .toString()}`}
              >
                <Treatments data={item} />
              </Route>
            );
          })}

          {/* 404 page */}
          <Route path={"*"}>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
