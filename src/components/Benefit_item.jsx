
const Benefit_item = (props) => {
  return (
    <div className="benefit_item_container">
        <img src={props.icon} className="benefit_item_icon" alt="" />
        <h3 className="benefit_item_title">{props.title}</h3>
        <p className="benefit_item_desc">{props.desc}</p>
    </div>
  )
}

export default Benefit_item