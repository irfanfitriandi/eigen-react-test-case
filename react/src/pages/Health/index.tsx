import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "components/Layout";
import NewsCard from "components/NewsCard";

import { ArticleTypes } from "types/ArticleTypes";

const Health = () => {
  const [news, setNews] = useState<ArticleTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeadlinesData();
  }, []);

  const fetchHeadlinesData = () => {
    axios
      .get(
        `top-headlines?country=us&category=health&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((data) => {
        setNews(data.data.articles);
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <h3 className="font-semibold text-xl md:text-2xl flex items-center gap-2 py-4">
        Health
        <div className="w-12 border-y-2 border-black" />
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {news.slice(0, 6).map((data, idx) => (
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
    </Layout>
  );
};

export default Health;
