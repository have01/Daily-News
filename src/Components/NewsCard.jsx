import React from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";

const NewsCard = ({ val }) => {
  const history = createBrowserHistory();

  return (
    <div
      class="card m-3 p-0 hover-overlay hover-zoom hover  cursor-pointer"
      style={{ width: "18rem" }}
    >
      <img src={val.urlToImage} class="card-img-top" alt={val.title} />
      <div class="card-body">
        <h5 class="card-title">{val.publishedAt}</h5>
        <p class="card-text text-primary">Sources:{val.source.name}</p>
        <p class="card-text">{val.title}</p>
        <Card.Link style={{ textDecoration: "none" }}>
          <Link to="/news" className="read_more_link" state={val}>
            Read More....
          </Link>
        </Card.Link>
      </div>
    </div>
  );
};

export default NewsCard;
