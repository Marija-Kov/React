
import star from '../assets/little-star.png';

export default function Card(props){
    const {status, image, title, rating, number, price} = props;
    return (
        <div className="card">
            <div className="status">{status}</div>
            <img className="exp-img" src={image} alt="swimmer" />
            <div className="card-text">
                <div className="rating">
                    <span><img className="star" src={star} alt="star" width="14px"/>{rating}</span>
                    <span className="grey-text">({number}) &middot; USA</span>
                </div>
                <p>{title}</p>
                <p className="price">
                    <span className="from">From {price}</span>
                    / person </p>
            </div>
        </div>
    )
}