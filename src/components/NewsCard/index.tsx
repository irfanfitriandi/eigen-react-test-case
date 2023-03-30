import { Card } from "antd";

interface NewsCardProps {
  alt: string;
  img: string;
  title: string;
  loading: boolean;
}

const { Meta } = Card;

const NewsCard = ({ alt, img, title, loading }: NewsCardProps) => (
  <Card
    hoverable
    loading={loading}
    className="mx-auto w-[350px] md:w-full"
    cover={
      loading === false && (
        <img className="h-56 object-cover" alt={alt} src={img} />
      )
    }
  >
    <Meta title={title} />
  </Card>
);

export default NewsCard;
