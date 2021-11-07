import { Link } from 'react-router-dom';
import { CardItemProps } from '../interface';

export default function NewsItem({
  id,
  title,
  label,
  picture,
  description,
}: CardItemProps) {
  return (
    <li className="card-item">
      <Link className="card-item-link" to={`/news/${id}`}>
        <figure className="card-item-pic-wrap" data-category={label}>
          <img src={`images/${picture}`} alt="Card Image" className="card-item-img" />{/*eslint-disable-line*/}
        </figure>
        <div className="card-item-info">
          <h5 className="card-item-text">{title}</h5>
        </div>
      </Link>
    </li>
  );
}
