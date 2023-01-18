import '../styles/Articles.css';
import Data from '../Data.json';
import Article_card from './Article_card';

const Articles = () => {
  return (
    <section className="articles section" id="articles">
        <div className="articles_body">
            <h2 className="section_title">{Data.landingPage.article_section.section_title}</h2>
            <div className="section_subtitle">{Data.landingPage.article_section.section_desc}</div>
            <div className="section_body">
                <div className="article_items">
                      {Data.landingPage.article_section.articles.map((item,index)=>{
                        return <div className="arItems" key={index}>
                          <Article_card title={item.title} img={item.img} user={item.postby} desc={item.desc} time={item.date} arlink={item.more_link} />
                        </div>
                      })}
                </div>
            </div>
        </div>
    </section>
  )
}  

export default Articles