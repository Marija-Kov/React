import React from 'react'

export class TestClass extends React.Component {

    render(){
        return (
            <>
            <TestApp />
            </>
           
        )
    }
}


class TestApp extends React.Component {
  // class field - declares state as an object
  // before class fields, any values that you wanted a class to contain had to be initialized in the constructor method
//   state = {
//     count: 0,
//   };
state =  {
    number: 1,
    character: {},
    width: window.innerWidth,
    showsWidth: false
}

useSWAPI=(id)=>{
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(res=>res.json())
    .then(data=> {
        this.setState(prev=>({
            character: data
        }))
    })
}

changeSize=()=>{
    this.setState(prev=>({
        width: window.innerWidth
    }))
}

componentDidMount(){
    console.log("mounted")
    this.useSWAPI(this.state.number)
    window.addEventListener("resize", this.changeSize);
}
componentDidUpdate(prevProps, prevState) {
    console.log("updated")
    if(prevState.number !== this.state.number){
        this.useSWAPI(this.state.number);
       }
}

componentWillUnmount(){
    console.log("unmounted")
    window.removeEventListener("resize", this.changeSize)
}
   

handleClick = (e) => {
    this.setState(prev => ({
    number : prev.number + e
    }))

}

toggleShowWidth = () => {
    this.setState(prev=>({
        showsWidth: !prev.showsWidth
    }))
}

  render() {
    console.log("rendered")
    return (
      <>
        <div>
          <button type="button" onClick={()=>this.handleClick(-1)}>previous</button>
          <button type="button" onClick={()=>this.handleClick(1)}>next</button>
          <p>{this.state.number}</p>
          <p>{this.state.character.name || "Loading..."}</p>
          <button type="button" onClick={()=>this.toggleShowWidth()}>Show Width</button>
          {this.state.showsWidth && <p>{this.state.width}</p>}
        </div>
        <br></br>
      </>
    );
  }
}
