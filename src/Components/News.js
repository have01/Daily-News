import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import NewsCard from "./NewsCard";

const Newsa = ({ val }) => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const BASE_URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=f29af06945f242688773dfc126faa5a6";

  const getResponse = () =>
    axios.get(BASE_URL).then((result) => {
      const response = result?.data?.articles;
      setNews(response);
      setLoading(false);
      console.log(response);
    });

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container-fluid  m-0 p-0 d-flex  align-content-start  justify-content-center flex-wrap news__container ">
            <div className="container-fluid m-0 p-0 d-flex row align-content-start  justify-content-center flex-wrap ">
              {news?.map((val, index) => {
                return (
                  <>
                    <NewsCard val={val} />
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Newsa;
