import data from '../data';
import Destination from './Destination';

export default function Destinations(){
    const showDestinations = data.map(e => {
        return (
            <Destination
              key={e.id}
              {...e}
              />
        )
    })
   return (
    <div className="destinations">
       {showDestinations}
      </div> 
   )
}