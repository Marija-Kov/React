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
constructor(){
    super()
    this.state = {
        count: 0
    }
    this.change = this.change.bind(this)
}

change(e){
    this.setState(prev=>{
        return ({count: prev.count + e})
    })
}

  render() {
    return (
      <div>
        <button type="button" onClick={()=>this.change(1)}>
          add
        </button>
        <button type="button" onClick={()=>this.change(-1)}>
          subtract
        </button>
        <p>{this.state.count}</p>
      </div> 
    );
  }
}
