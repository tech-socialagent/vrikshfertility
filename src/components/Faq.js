import "../styles/FAQ.css";
import FAQImg from "../assests/Photos/christian-bowen-OJOE587CWuE-unsplash.jpg";
function Faq() {
  return (
    <section className="FAQ-main">
      <div className="FAQ-left">
        <p>FAQ's</p>
        <h1>FAQ’s on OT - TI Treatment</h1>
        <div className="dropdown">
          <p>Do you do residential work?</p>
          </div>
          <div class="dropdown-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <p>Do you do residential work?</p>
          <div class="dropdown-content2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <p>Do you do residential work?</p>
          <div class="dropdown-content3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

        </div>
      <div className="FAQ-right">
        <img src={FAQImg} alt="" className="FAQ-right-baby-img1" />
        <img src={FAQImg} alt="" className="FAQ-right-baby-img2" />
      </div>
    </section>
  );
}
export default Faq;
//
