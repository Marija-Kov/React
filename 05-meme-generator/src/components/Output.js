import React from "react"
// import boxes from '../boxes';
// import Box from './Box'

export default function WindowTracker(){
 const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(()=> {
    function watchWidth(){
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', watchWidth)
    return function (){
    window.removeEventListener('resize', watchWidth)
    }
  },[]);
  return (
    <h1>Width: {windowWidth} </h1>
  ) 
}

// export default function Starwars(){
//   const [swData, setSwData] = React.useState({})
//   const [count, setCount] = React.useState(1);

//   console.log("Component rendered")
  
//   React.useEffect(()=> {
//     console.log("Effect ran")
//     fetch(`https://swapi.dev/api/people/${count}`)
//     .then(res => res.json())
//     .then(data => setSwData(data))
//   },[count])

//   return (
//     <div>
//       <h1>The count is {count}</h1>
//       <br />
//       <button onClick={()=>setCount(prev => prev+1)}>Add</button>
//       <pre>{JSON.stringify(swData, null, 2)}</pre>
//     </div>
//   )
// }

// export default function Form(){

//   const[state, setState] = React.useState({
//     email:"", password:"", confirmPassword:"", join: false
//   })


// const handleChange = (event) => {
//   const {name, value, checked, type} = event.target;
//   setState(prev => {
//     return {
//       ...prev,
//       [name]: type === "checkbox" ? checked : value
//     }
//   })
// }

// const handleSubmit = (event) => {
//   event.preventDefault()
//   if(state.password === state.confirmPassword){
//     console.log('Successfully signed up');
//   }else{
//     console.log('Passwords do not match');
//   }

//   if(state.join){
//     console.log('Thanks for signing up for our newsletter')
//   }
    
// } 


// return (

// <form onSubmit={handleSubmit}>
// <input type="email" placeholder="Email" name="email" onChange={handleChange} value={state.email} />
// <br />
// <input type="password" placeholder="password" name="password" onChange={handleChange} value={state.password} />
// <br />
// <input type="password" placeholder="confirm password" name="confirmPassword" onChange={handleChange} value={state.confirmPassword} />
// <br />
// <label htmlFor="join">I want to join the newsletter</label>
// <input type="checkbox" id="join" name="join" onChange={handleChange} checked={state.join} />
// <br />
// <button>Sign up</button>
//   </form>

//     )
    
// }
// export default function Form(){
//   const[state, setState] = React.useState(
//     {firstName:"", lastName:"", email:"", comments:"", isFriendly: true, status: "", favColour:""}
//     );

//   console.log(state);

//   const handleChange = (event) => {
//     const {name, value, type, checked} = event.target;
//     setState(prev => {
//       return {
//         ...prev,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }
  
//   const handleSubmit = (event) => {
//      event.preventDefault()
//      // submitToApi(formData)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//          name="firstName"
//          type="text"
//          placeholder="First Name"
//          onChange={handleChange}
//          value={state.firstName}
//       />
//       <input
//          name="lastName"
//          type="text"
//          placeholder="Last Name"
//          onChange={handleChange}
//          value={state.lastName}
//       />
//       <input
//          name="email"
//          type="email"
//          placeholder="Email@email.com"
//          onChange={handleChange}
//          value={state.email}
//       />
//       <textarea 
//         name="comments" 
//         placeholder="Your Comments"
//         value={state.comments}
//         onChange={handleChange} 
//       />
//       <p>
//        <label htmlFor="isFriendly">Are you friendly?</label>
//         <input 
//         name="isFriendly"
//         type="checkbox" 
//         id="isFriendly" 
//         onChange={handleChange} 
//         checked={state.isFriendly} />
//        </p>
//       <br />
//       <br />
//        <fieldset>
//          <legend>Current employment status</legend>
//          <br />
//          <label htmlFor="unemployed">Unemployed</label>
//            <input 
//               type="radio"
//               id="unemployed"
//               name="status"
//               value="unemployed"
//               onChange={handleChange} 
//               />
//          <br />
//          <br />
//          <label htmlFor="part-time">Part-time</label>
//           <input 
//               type="radio"
//               id="part-time"
//               name="status"
//               value="part-time"
//               onChange={handleChange} 
//               />
//         <br />
//         <br />
//          <label htmlFor="full-time">Full-time</label>
//           <input 
//               type="radio"
//               id="full-time"
//               name="status"
//               value="full-time"
//               onChange={handleChange} 
//               />
//               <br />
//        </fieldset>
//        <br />
//        <br />
//        <label htmlFor="favColour">What's your favourite colour?</label>
//        <br />
//        <select id="favColour" 
//                name="favColour"
//                value={state.favColour}
//                onChange={handleChange}>
//          <option value="">--Choose--</option>
//          <option value="red">Red</option>
//          <option value="orange">Orange</option>
//          <option value="green">Green</option>
//        </select>
//         <br />
//         <br />
//         <button>Submit</button>
//     </form>
   
//   )
// }


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