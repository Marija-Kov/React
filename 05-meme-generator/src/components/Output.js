import React from "react"
// import boxes from '../boxes';
// import Box from './Box'

export default function Form(){
  const[state, setState] = React.useState(
    {firstName:"", lastName:"", email:"", comments:"", isFriendly: true, status: ""}
    );

  console.log(state);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <form>
      <input
         name="firstName"
         type="text"
         placeholder="First Name"
         onChange={handleChange}
         value={state.firstName}
      />
      <input
         name="lastName"
         type="text"
         placeholder="Last Name"
         onChange={handleChange}
         value={state.lastName}
      />
      <input
         name="email"
         type="email"
         placeholder="Email@email.com"
         onChange={handleChange}
         value={state.email}
      />
      <textarea 
        name="comments" 
        placeholder="Your Comments"
        value={state.comments}
        onChange={handleChange} 
      />
      <p>
       <label htmlFor="isFriendly">Are you friendly?</label>
        <input 
        name="isFriendly"
        type="checkbox" 
        id="isFriendly" 
        onChange={handleChange} 
        checked={state.isFriendly} />
       </p>
      <br />
      <br />
       <fieldset>
         <legend>Current employment status</legend>
         <br />
         <label htmlFor="unemployed">Unemployed</label>
           <input 
              type="radio"
              id="unemployed"
              name="status"
              value="unemployed"
              onChange={handleChange} 
              />
         <br />
         <br />
         <label htmlFor="part-time">Part-time</label>
          <input 
              type="radio"
              id="part-time"
              name="status"
              value="part-time"
              onChange={handleChange} 
              />
        <br />
        <br />
         <label htmlFor="full-time">Full-time</label>
          <input 
              type="radio"
              id="full-time"
              name="status"
              value="full-time"
              onChange={handleChange} 
              />
              <br />
       </fieldset>
       
    </form>
   
  )
}


// export default function Output() { 
// const [boxy, setBoxy] = React.useState(boxes);
// const toggle = (id) => {
//   setBoxy(prev => {
//     return prev.map(box => {
//       return box.id === id ? {...box, on: !box.on} : box   
//     })
//   })
// }
// const showBoxes = boxy.map(e => {
//   return (
//     <Box key={e.id}
//         //  id={e.id} 
//         //  toggle={toggle}
//         toggle={()=>toggle(e.id)}
//         on={e.on}
//          />
//   )
// })
//     return (
//        <main>
//          {showBoxes}
//        </main>
//     )
// }