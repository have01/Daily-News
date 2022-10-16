import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";

const Readmore = () => {
  const location = useLocation();
  const {
    title,
    description,
    publishedAt,
    urlToImage,
    source,
    content,
    url,
    author,
  } = location.state;
  console.log(location.state);
  return (
    <div class="container mx-auto flex flex-column mt-10">
      <h5>
        {source.name} {publishedAt}
      </h5>
      <h1>{title}</h1>
      <img
        class="object-cover h-48 w-96 ..."
        src={urlToImage}
        alt=""
        className="news_section"
      />
      <h4 className="mt-3">{author}</h4>
      <p className="mt-4">{description}</p>
      <p>{content}</p>
      <a href={url} target="_blank">
        Source
      </a>
    </div>
  );
};

export default Readmore;
