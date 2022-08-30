
import star from '../assets/little-star.png';

export default function Card(props){
    const {coverImg, title, rating, reviewCount, location, price, openSpots} = props;
    return (
        <div className="card">
            {!openSpots && <div className="status">sold out</div>}
            <img className="exp-img" src={coverImg} alt="swimmer" />
            <div className="card-text">
                <div className="rating">
                    <span><img className="star" src={star} alt="star" width="14px"/>{rating}</span>
                    <span className="grey-text">({reviewCount}) &middot; {location}</span>
                </div>
                <p>{title}</p>
                <p className="price">
                    <span className="from">From ${price}</span>
                    / person </p>
            </div>
        </div>
    )
}