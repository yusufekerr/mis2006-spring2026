import { useEffect, useState } from "react";

export default function EffectLoggerFunction() { 
    const [seconds, setSeconds] = useState(0); 
    
    useEffect(() => { 
        console.log("Function: effect started"); 
        
        const timerId = setInterval(() => { 
            setSeconds((currentSeconds) => currentSeconds + 1); 
        }, 1000); 
        
        return () => { 
            console.log("Function: effect cleaned up"); 
            clearInterval(timerId); 
        }; 
    }, []); 
    
    return ( 
    <section className="panel"> 
        <h2>Functional useEffect Timer</h2> 
        <p>Seconds: {seconds}</p> 
    </section> 
    );
}