import React from 'react'
 
 class Bomb extends React.Component{
 
    constructor(props) {
        super()
        this.state = {secondsLeft: props.initialCount}
      }

    countDown=()=>{
        setInterval(()=>{

            let currentCount = this.state.secondsLeft
    
                let newCount = currentCount-1
                this.setState({secondsLeft:newCount})

        }, 1000)
    }

     render(){
         return(
             <h2 onClick ={this.countDown}>{this.state.secondsLeft > 0? `${this.state.secondsLeft} seconds left before I go boom!`:"Boom!"}</h2>
         )
        }
    }

    
export default Bomb
