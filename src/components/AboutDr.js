import '../styles/AboutDr.css';
import youtube from '../assests/Icons/youtube-3.png';
import insta from '../assests/Icons/IG.png';
import linkdin from '../assests/Icons/linkedin.png';
import twitter from '../assests/Icons/Twitter.png';
import DoctorPic from '../assests/Photos/freestocks-9UVmlIb0wJU-unsplash.jpg';
import ContactImg from '../assests/Photos/alvin-mahmudov-D3H1opzzq68-unsplash.jpg';

function AboutDr(){
    return(
        <>
        <section className='about-doctor'>
        <div className='about-doc-left'>
            <img src={DoctorPic} alt=''/>
            <div className='about-doc-name'>
                Dr.Sneha Shetty
            </div>
            <div className='about-doc-desc'>
            Clinical Director & Chief Fertility Specialist
            </div>
            <div className='about-doc-social-media-links'>
                <img src={youtube} alt=""/>
                <img src={insta} alt=""/>
                <img src={linkdin} alt=""/>
                <img src={twitter} alt=""/>
                <img src={twitter} alt=""/>
      <h1>Follow Her</h1> 
            </div>

        </div>
        <div className='about-doctor-right'>
            <div className='about-doc-title'>
            About Dr.Sneha Shetty
            </div>
            <div className='about-doc-subtitle'>
            Clinical Director & Chief Fertility Specialist
            </div>
            <div className='about-doc-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        <div className='about-doc-membership'>
        <h1>Membership</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
            </ul>
            <h1>Awards</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
            </ul>

        </div>
        </div>


        </section>
        <div className='about-doctor-contact'>
            <div className='about-doctor-form-contact'>
                <h1>Contact Me</h1>
                <form className='about-contact-form'>
                <div className='input-section'>
                    <input type="name" placeholder='Name'/>
                    <input type="email" placeholder='Email ID'/>
                    <input type="number" placeholder='Contact Number'/>
                    <input type="name" placeholder='Subject'/>
                    </div>
                    <div className='about-doc-contact-form-second'>
                    <textarea placeholder='meassage' className='contact-meassage'/>
                    <button>Send meassage</button>
                    </div>

                </form>
            </div>
            <div className='about-doctor-form-photo'> 
            <img src={ContactImg} alt=""/>
            </div>
        </div>
</>
    )
}
export default AboutDr;