import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const BASE_URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=f29af06945f242688773dfc126faa5a6";

  useEffect(() => {
    axios.get(BASE_URL).then((result) => {
      const response = result.data?.articles;
      setNews(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          <h1>Latest News</h1>
          <div className="Container">
            {news?.map((val) => {
              return (
                <>
                  <div className="cards">
                    <img src={val.urlToImage} alt="" srcset="" /> <br />
                    <p style={{ fontWeight: "bold", color: "blue" }}>
                      {val.publishedAt}
                    </p>
                    <h5>{val.title}</h5>
                    <p>{val.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default App;
