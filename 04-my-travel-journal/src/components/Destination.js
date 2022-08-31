import location from '../assets/location-icon.png';

export default function Destination(props){
    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={`./images/${props.image}`} alt={props.place}/>
            </div>
            <div className="text-wrapper">
                <div className="location-maps">
                    <span className="country">
                        <span><img src={location} alt="location" width="20px"/></span>
                        <span>{props.country}</span>
                    </span>
                    <a href={props.maps}>View on Google Maps</a>
                </div>
                <p className="place">{props.place}</p>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}