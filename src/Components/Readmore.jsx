import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/home.css";

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
    <div
      class="container mx-auto flex flex-column mt-10 news_heading read_container"
      style={{ background: "white" }}
    >
      <h5 className="source_heading">
        {source.name} {publishedAt}
      </h5>
      <h1>{title}</h1>
      <img
        class="object-cover h-48 w-96 ..."
        src={urlToImage}
        alt=""
        className="news_section"
      />
      <h4 className="mt-3">
        <span style={{ color: "#8a2be2" }}>Author:</span> {author}
      </h4>
      <p className="mt-4">{description}</p>
      <p className="news_content"> {content}</p>
      <a href={url} target="_blank">
        Source
      </a>
    </div>
  );
};

export default Readmore;
