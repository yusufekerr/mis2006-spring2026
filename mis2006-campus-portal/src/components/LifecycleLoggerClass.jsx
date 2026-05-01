import { Component } from "react";

export default class LifecycleLoggerClass extends Component { 
    state = { 
        seconds: 0, 
    }; 
    
    componentDidMount() { 
        console.log("Class: component mounted"); 
        
        this.timerId = setInterval(() => { 
            this.setState((previousState) => ({ 
                seconds: previousState.seconds + 1, 
            })); 
        }, 1000); 
    } 
    
    componentDidUpdate(previousProps, previousState) { 
        if (previousState.seconds !== this.state.seconds) { 
            console.log("Class: seconds updated", this.state.seconds); 
        } 
    } 
    
    componentWillUnmount() { 
        console.log("Class: component will unmount"); 
        clearInterval(this.timerId); 
    } 
    
    render() { 
        return ( 
        <section className="panel"> 
            <h2>Class Lifecycle Timer</h2> 
            <p>Seconds: {this.state.seconds}</p> 
        </section> 
        ); 
    }
}