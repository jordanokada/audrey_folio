import React, {useState} from "react";
import './SportsMedia.css';
import { Link } from "react-router-dom";
import articles from "./articlesData";

const SportsMedia = () => (
    <div className="blog-container">
        <h1 className="blog-title">Sports Media</h1>

    <div className="blog-intro">
        <p>
          Athletics have been an integral part of my life from a young age. 
          From playing to watching, sports have always found their way into my 
          everyday routine. Sports media quickly became one of my passions and
           even a minor I pursued in college. Here are some of my favorite sports 
           media articles I have written over the years, have a look!.
        </p>
    </div>
    <div className="blog-grid">
         {articles.map(article => (
          <div className="blog-card" key={article.id}>
            <div className="blog-date">{article.date}</div>
            <div className="blog-card-title">{article.title}</div>
            <div className="blog-subtitle">{article.description}</div>
            {article.url ? (
              <a
                className="blog-readmore"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            ) : (
              <Link
                className="blog-readmore"
                to={`/sportsmedia/${article.id}`}
              >
                Read More
              </Link>
            )}
          </div>
        ))}
        </div>
        <div className="blog-link">
          <p>Interested in more articles? Check out my blog!</p>
          <a
              href="https://auge3488.wixsite.com/rookie-radar"
              target="_blank"
              rel="noopener noreferrer"
              className="rookie-radar-link"
          >
              Rookie Radar
          </a>
        </div>
    </div>
);

export default SportsMedia;

// const SportsMedia = () => {
//     const [modalArticle, setModalArticle] = useState(null);
//     const [articleText, setArticleText] = useState("");

//     const handleReadMe = async (article) => {
//         if (article.url) {
//             window.open(article.url, "_blank");
//         } else if (article.file) {
//             const response = await fetch(article.file);
//             const text = await response.text();
//             console.log(text);
//             setArticleText(text);
//             setModalArticle(article);
//         }
//     };

//     const closeModal = () => setModalArticle(null);

//     return (
//         <div className="blog-container">
//             <h1 className="blog-title">Sports Media</h1>
//             <div className="rookie-radar">
//                 <strong>Check out my blog:</strong>{" "}
//                 <a 
//                     href="https://auge3488.wixsite.com/rookie-radar?fbclid=PAZXh0bgNhZW0CMTEAAaclkGjNL6C2_PfnPIB58oJ7bF-kmSFFs2dZYo7PH3yjAwCTex3XJfkuX_vcOQ_aem_YTMd1tsUzydy05A3bjQ8bA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rookie-radar-link"
//                 >
//                     Rookie Radar
//                 </a>
//             </div>
//             <div className="blog-grid">
//                 {articles.map(article => (
//                     <div className="blog-card" key={article.id}>
//                         <div className="blog-date">{article.date}</div>
//                         <div className="blog-card-title">{article.title}</div>
//                         <div className="blog-subtitle">{article.description}</div>
//                         <button 
//                             className="blog-readmore"
//                             onClick={() => handleReadMe(article)}
//                         >Read More</button>
//                     </div>
//                 ))}
//             </div>
//             {modalArticle && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <button className="modal-close" onClick={closeModal}>×</button>
//                         <h2>{modalArticle.title}</h2>
//                         <div className="modal-article">
//                             {articleText.split(/\n\s*\n/).map((para, idx) => (
//                                 <p key={idx} className={idx === 0 ? "modal-article-title" : ""}>{para.trim()}</p>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );

//     // return (
//     //     <div className="newspaper-container">
//     //         <h1 className="newspaper-title">Sports Media</h1>
//     //         <div className="articles-list">
//     //             {articles.map(article => (
//     //                 <div className="article-card" key={article.id}>
//     //                     <h2 className="article-title">{article.title}</h2>
//     //                     <p className="article-description">{article.description}</p>
//     //                     <button className="read-me-btn" onClick={() => handleReadMe(article)}>Read Me</button>
//     //                 </div>
//     //             ))}
//     //         </div>

//     //         {modalArticle && (
//     //             <div className="modal-overlay">
//     //                 <div className="modal-content">
//     //                     <button className="modal-close" onClick={closeModal}>x</button>
//     //                     <h2>{modalArticle.title}</h2>
//     //                     <p style={{ whiteSpace: "pre-wrap" }}>{articleText}</p>
//     //                 </div>
//     //             </div>
//     //         )}
//     //     </div>
//     // );
// };

// export default SportsMedia;