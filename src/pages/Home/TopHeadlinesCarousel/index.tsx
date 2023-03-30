import { useState, useEffect } from "react";

import { Carousel } from "antd";
import axios from "axios";
import { ArticleTypes } from "types/ArticleTypes";

const TopHeadlinesCarousel = () => {
  const [headlines, setHeadtlines] = useState<ArticleTypes[]>([]);

  useEffect(() => {
    fetchHeadlinesData();
  }, []);

  const fetchHeadlinesData = () => {
    axios
      .get(`top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((data) => {
        setHeadtlines(data.data.articles);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="-mx-4">
      <Carousel autoplay>
        {headlines.slice(4, 9).map((data, idx) => (
          <div key={idx}>
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${data.urlToImage})`,
                backgroundSize: `cover`,
              }}
              className="flex justify-center items-end h-96 tracking-tight md:text-base text-center text-white pb-10"
            >
              <a href={data.url}>{data.title}</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopHeadlinesCarousel;
