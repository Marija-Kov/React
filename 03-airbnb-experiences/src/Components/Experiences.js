import katie from '../assets/swimmer.png';
import wedding from "../assets/wedding-photography.png";
import bike from "../assets/mountain-bike.png";
import Card from './Card';

export default function Experiences(){
    return (
        <div className="experiences">
            <Card
              status="sold out"
              image={katie}
              rating="5.0"
              number="6"
              title="Life lessons with Katie Zaferes"
              price="$136" />
            <Card
              status="online"
              image= {wedding}
              rating="5.0"
              number="30"
              title="Learn wedding photography"
              price="$125" />
            <Card
              status="open"
              image= {bike}
              rating="4.8"
              number="2"
              title="Group Mountain Biking"
              price="$50" />
        </div>
    )
}