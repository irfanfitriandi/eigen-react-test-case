import Layout from "components/Layout";
import Articles from "./Articles";
import TopHeadlinesCarousel from "./TopHeadlinesCarousel";

const Home = () => {
  return (
    <Layout>
      <TopHeadlinesCarousel />
      <Articles />
    </Layout>
  );
};

export default Home;
