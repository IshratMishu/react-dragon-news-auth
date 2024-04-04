import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const NewsCard = ({homeNew}) => {
        const {title, image_url, details, _id} = homeNew;

    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <figure><img src={image_url} alt="Shoes" /></figure>
          {
            details.length > 200 ? 
            <p>{details.slice(0,200)} <Link 
            to={`/news/${_id}`}
            className='font-bold text-red-600'>Read More</Link></p> 
            : 
            <p>{details}</p>
          }
        </div>
      </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    homeNew: PropTypes.object
 }