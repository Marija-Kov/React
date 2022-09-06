import React from "react"
import boxes from '../boxes';
import Box from './Box'

export default function Output() { 
const [boxy, setBoxy] = React.useState(boxes);
const toggle = (id) => {
  setBoxy(prev => {
    return prev.map(box => {
      return box.id === id ? {...box, on: !box.on} : box   
    })
  })
}
const showBoxes = boxy.map(e => {
  return (
    <Box key={e.id}
        //  id={e.id} 
        //  toggle={toggle}
        toggle={()=>toggle(e.id)}
        on={e.on}
         />
  )
})
    return (
       <main>
         {showBoxes}
       </main>
    )
}