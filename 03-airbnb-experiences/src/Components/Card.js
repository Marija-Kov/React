
import star from '../assets/little-star.png';

export default function Card(props){
    let badgeText;
    if(!props.openSpots){
        badgeText = "sold out"
    }else if(props.location.toLowerCase()==="online"){
        badgeText = "online"
    }
    return (
        <div className="card">
            {badgeText && <div className="status">{badgeText}</div>}
            <img className="exp-img" src={`./images/${props.coverImg}`} alt="swimmer" />
            <div className="card-text">
                <div className="rating">
                    <span><img className="star" src={star} alt="star" width="14px"/>{props.stats.rating}</span>
                    <span className="grey-text">({props.stats.reviewCount}) &middot; {props.location}</span>
                </div>
                <p>{props.title}</p>
                <p className="price">
                    <span className="from">From ${props.price}</span>
                    / person </p>
            </div>
        </div>
    )
}