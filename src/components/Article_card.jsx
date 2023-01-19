import "../styles/Article_card.css";
import {FaUser,FaCalendar} from 'react-icons/fa';

const Article_card = ({ img, title, desc, time, user, arlink }) => {
  return (
    <div className="article_card">
      <img
        src={require("../assests/Photos/" + img)}
        alt=""
        className="article_img"
      />
      <div className="article_title">{title}</div>
      <div className="article_upload_dt">
        <div className="article_time"><FaCalendar className="icon"/> {time}</div>
        <div className="article_by"><FaUser className="icon"/> {user}</div>
      </div>
      <div className="article_desc">{desc}</div>
      <div className="article_readmore">
        <a href={arlink}>Read More..</a>
      </div>
    </div>
  );
};

export default Article_card;
