import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import articles from "./articlesData"; 
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleIndex = articles.findIndex(a => String(a.id) === id);
  const article = articles[articleIndex];
  const [articleText, setArticleText] = useState("");

  useEffect(() => {
    if (article?.file) {
      fetch(article.file)
        .then(res => res.text())
        .then(setArticleText);
    }
  }, [article]);

  if (!article) return <div>Article not found.</div>;

  // Find previous and next articles
  const prev = articles[articleIndex - 1];
  const next = articles[articleIndex + 1];

  return (
    <div className="article-page-outer">
      <div className="article-page-container">
        <button onClick={() => navigate('/sportsmedia')} className="back-btn">← Back</button>
        <article className="blog-article">
          <header>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-date">{article.date}</div>
            <div className="article-subtitle">{article.description}</div>
          </header>
          <section className="article-content">
            {article.url ? (
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read the full article here</a>
            ) : (
              articleText.split(/\n\s*\n/).map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))
            )}
          </section>
        </article>
      </div>
      <div className="article-nav-fixed">
        {prev ? (
          prev.url ? (
            <a
              href={prev.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-nav-btn left"
            >
              <span className="arrow">&lt;</span>
              <span className="nav-text">
                read previous article: <strong>{prev.title}</strong>
              </span>
            </a>
          ) : (
            <Link to={`/sportsmedia/${prev.id}`} className="article-nav-btn left">
              <span className="arrow">&lt;</span>
              <span className="nav-text">
                read previous article: <strong>{prev.title}</strong>
              </span>
            </Link>
          )
        ) : <div></div>}
        {next ? (
          <Link to={`/sportsmedia/${next.id}`} className="article-nav-btn right">
            <span className="nav-text">
              read next article: <strong>{next.title}</strong>
            </span>
            <span className="arrow">&gt;</span>
          </Link>
        ) : <div></div>}
      </div>
    </div>
  );

};

export default ArticlePage;