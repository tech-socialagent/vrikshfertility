import { useEffect } from "react";
import "../styles/TeamValue.css";
const TeamValue = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  
  return (
    <section className="teamvaluePage">
      <div className="header">
        <div>
          <h2>Team Values</h2>
        </div>
      </div>
      <div className="team_body">
        <h3>
          “Having a child is one of the most cherished moments in one’s life!
          While it comes naturally to some, it is a distant dream to many.”
        </h3>
        <h3>
          “Vriksh Fertility was started to help couples fulfil that dream
          of parenthood. We are started this institution with a clear purpose of
          being an ethical and trusted centre for advanced reproductive medicine
          technology - thanks to the relentless efforts of a strong, highly
          committed clinical and scientific team.”
        </h3>
        <h2>
          The Brand Vriksh Represents A Trusted Platform In Reproductive
          Medicine And IVF.
        </h2>
        <div className="team_desc">
          <div className="teamvalue_text">
            <h4 className="doc_detail">
              Dr. Sneha Shetty , clinical director & chief fertility specialist
              of VRIKSH FERTILITY has more than a decade of experience in the
              medical field.
            </h4>
            <h4 className="doc_quote">
              {"\u201c"}We didn't want to start an organisation with routine fertility
              services. The ethos of this organisation is to provide the most
              ethical, advanced and holistic practices in the field of
              fertility. The care and service provided to each couple will be
              individualised and evidence based at par with international
              standards in an accessible yet affordable way. {"\u201d"}
            </h4>
            <p className="team_text">
              Centre headed by Managing Director Mr. Hari Prasad Shetty, MBA
              Harvard university, has experience in the hospital industry
              especially in the field of reproductive medicine for more than a decade
              and has won many awards for the institutions he has worked for. He
              believes in changing the Indian healthcare system with the introduction of
              advanced treatments in the field of reproductive medicine.
            </p>
            <p className="team_text">
              With the vision of setting a benchmark in the field of reproductive
              medicine by delivering the best possible outcomes for couples
              looking to experience a wonderful world of parenthood, he says “
              There is quite a lot to look forward to when we are talking about
              fertility treatments like regenerative medicine, genetic
              advancements, AI based embryo monitoring, automated freezing of
              embryos, advancing the field of OMICS etc. Fertility is a field
              wherein its the union of technology and medicine brings anxious
              couples closer to their dream of having a healthy baby! We at
              VRIKSH FERTILITY work towards a holistic approach towards a
              couples treatment as infertility can have a growing psychological
              impact - so we make sure that both partners are comfortable to
              start their fertility treatment journey! We have a team of highly
              qualified and experienced doctors and embryologists, along with
              the latest technologies, infrastructure, facilities and
              excellent quality of services provided to patients! We have put in
              our best efforts to bring in the state-of-the-art equipment needed
              to effectively and efficiently manage infertility and give the
              best results! “
            </p>
          </div>
          <div className="team_img">
            <img src={require("../assests/Photos/teamvaluebg.jpg")} alt="" />
          </div>
        </div>
        <h3 className="section_ft">
          VRIKSH FERTILITY- THE MOST TRUSTED ADVANCED CENTRE FOR REPRODUCTIVE
          TECHNOLOGY!
        </h3>
      </div>
    </section>
  );
};

export default TeamValue;
