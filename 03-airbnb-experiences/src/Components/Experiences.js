import data from '../data.js'
import Card from './Card';

export default function Experiences(){

    const showCard = data.map(e => {
        return (
          <Card
              coverImg={`./images/${e.coverImg}`}
              rating={e.stats.rating}
              reviewCount={e.stats.reviewCount}
              location={e.location}
              title={e.title}
              price={e.price}
              openSpots={e.openSpots} />  
        )
    })
    return (
        <div className="experiences">
            {showCard}
        </div>
    )
}
 