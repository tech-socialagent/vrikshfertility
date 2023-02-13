import "../styles/TestimonialsCard.css";

function TestimonialsCard({ desc, pic, name, age, prof,clr }) {
  return (
    <div className="test_card" style={{"backgroundColor": clr}}>
      <div className="test_desc">{desc}</div>
      <div className="test_user">
        <img
          src={require("../assests/Icons/" + pic)}
          alt=""
          className="user_pic"
        />
        <div className="test_user_detail">
          <div className="user_name">
            {name} , {age}
          </div> 
          <div className="user_prof">{prof}</div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialsCard;
