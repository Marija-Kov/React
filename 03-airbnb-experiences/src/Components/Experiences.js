import data from '../data.js'
import Card from './Card';

export default function Experiences(){

    const showCard = data.map(e => {
        return (
          <Card
              key={e.id}
              {...e} /> 
        )
    })
    return (
        <div className="experiences">
            {showCard}
        </div>
    )
}
 