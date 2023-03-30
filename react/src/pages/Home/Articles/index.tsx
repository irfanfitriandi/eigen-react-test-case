import { useEffect, useState } from "react";
import axios from "axios";

import NewsCard from "components/NewsCard";
import { ArticleTypes } from "types/ArticleTypes";

const Articles = () => {
  const [news, setNews] = useState<ArticleTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeadlinesData();
  }, []);

  const fetchHeadlinesData = () => {
    axios
      .get(`top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((data) => {
        setNews(data.data.articles);
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h3 className="font-semibold text-xl md:text-2xl flex items-center gap-2 py-4">
        Must See
        <div className="w-12 border-y-2 border-black" />
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {news.slice(10, 14).map((data, idx) => (
          <a key={idx} href={data.url}>
            <NewsCard
              loading={loading}
              alt={data.title}
              img={data.urlToImage}
              title={data.title}
            />
          </a>
        ))}
      </div>
      <h3 className="font-semibold text-xl md:text-2xl flex items-center gap-2 py-4">
        Must Read
        <div className="w-12 border-y-2 border-black" />
      </h3>
      <div className="grid lg:grid-cols-2 gap-6">
        {news.slice(14, 20).map((data, idx) => (
          <div
            key={idx}
            className="text-5xl text-primary antialiased flex items-center gap-2"
          >
            {idx + 1}
            <a
              href={data.url}
              className="text-base font-normal text-black hover:underline"
            >
              {data.title}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
