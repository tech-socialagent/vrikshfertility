import "../styles/ArticlesCard.css";
import ArticlesCardImg from "../assests/Photos/articleCard.jpg";
import calendar from "../assests/Icons/calendar.png";
import user from "../assests/Icons/user.png";
import Data from '../Data.json';
function ArticlesCard() {
  return (
    <section className="ArticlesCard">
      <div className="Articles-card-main">
        <div className="ArticlesCard-firstPart">
          <img src={ArticlesCardImg} alt="" className="articleCardImage" />
        </div>

        <div className="ArticlesCard-SecondPart">
          <h1 className="SecondPart-heading">
{Data.landingPage.article_section.articles[0].title}
          </h1>
          <div className="SecondPart-date-user">
            <img src={calendar} alt="" className="calendar" />
            <p>{Data.landingPage.article_section.articles[0].date}</p>
            <img src={user} alt="" className="admin" />
            <p>{Data.landingPage.article_section.articles[0].postby}</p>
          </div>
          <hr className="line"/>
        </div>
        <div className="ArticlesCard-ThirdPart">
          <p className="ThirdPart-desc">
          {Data.landingPage.article_section.articles[0].desc}

          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}
export default ArticlesCard;
