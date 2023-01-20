import "../styles/FAQ.css";
import FAQImg from "../assests/Photos/christian-bowen-OJOE587CWuE-unsplash.jpg";
function Faq() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn2")) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var x;
      for (x = 0; x < dropdowns2.length; x++) {
        var openDropdown2 = dropdowns2[x];
        if (openDropdown2.classList.contains("show2")) {
          openDropdown2.classList.remove("show2");
        }
      }
    }
  };

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn3")) {
      var dropdowns3 = document.getElementsByClassName("dropdown-content3");
      var z;
      for (z = 0; z < dropdowns3.length; z++) {
        var openDropdown3 = dropdowns3[z];
        if (openDropdown3.classList.contains("show3")) {
          openDropdown3.classList.remove("show3");
        }
      }
    }
  };

  return (
    <section className="FAQ-main">
      <div className="FAQ-left">
        <p>FAQ's</p>
        <h1>FAQ’s on OT - TI Treatment</h1>
        <div class="dropdown">
          <button onClick={myFunction} className="dropbtn">
            Do you do residential work?
          </button>
          <div id="myDropdown" className="dropdown-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button onClick={myFunction2} className="dropbtn2">
            Do you do residential work?
          </button>
          <div id="myDropdown2" className="dropdown-content2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button onClick={myFunction3} className="dropbtn3">
            Do you do residential work?
          </button>
          <div id="myDropdown3" className="dropdown-content3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
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
