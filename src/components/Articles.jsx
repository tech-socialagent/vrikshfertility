import '../styles/Articles.css';
import Data from '../Data.json';

const Articles = () => {
  return (
    <section className="articles section" id="articles">
        <div className="articles_body">
            <h2 className="section_title">{Data.landingPage.article_section.section_title}</h2>
            <div className="section_subtitle">{Data.landingPage.article_section.section_desc}</div>
            <div className="section_body">
                <div className="article_items">
                    
                </div>
            </div>
        </div>
    </section>
  )
}  

export default Articles