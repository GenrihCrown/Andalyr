import { News as NEWS } from '../../../news';
import NewsItem from './NewsItem';
import './News.css'

export default function News() {
  const [firstLine, secondLine] = [NEWS.slice(0, 2), NEWS.slice(2)];

  return (
    <div className="cards">
      <h1>Новости</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {firstLine.map((n) => (
              <NewsItem key={n.id} {...n} />
            ))}
          </ul>
          <ul className="cards-items">
            {secondLine.map((n) => (
              <NewsItem key={n.id} {...n} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
