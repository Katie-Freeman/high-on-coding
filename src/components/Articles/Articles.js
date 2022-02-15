import { Component } from "react";
import stylesheet from "./articles.module.css";

class Articles extends Component {
  render() {
    const articleItems = this.props.allArticles.map((article, index) => {
      return (
        <li key={index}>
          <h3>{article.title}</h3>
          <p>{article.body} </p>
          <div className={stylesheet.engagement}>
            <span className={stylesheet.comments}>
              Comments {article.comments}{" "}
            </span>
            <span className={stylesheet.likes}>Likes {article.likes}</span>
          </div>
        </li>
      );
    })
    return (
      <div className={stylesheet.articleDiv}>
        <ul>
          {articleItems}
        </ul>
      </div>
    );
  }
}

export default Articles;
