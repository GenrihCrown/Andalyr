import { useParams } from "react-router-dom";
import { NewsItem } from "../news";

export default function NewsItemPage() {
  const id  = useParams();

  return <>{NewsItem.filter((item) => item.id.toString() === id as unknown)[0].text}</>;
}
