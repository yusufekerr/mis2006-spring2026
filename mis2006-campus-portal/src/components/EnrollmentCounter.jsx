import { useState } from "react";
export default function EnrollmentCounter() {
    const [students, setStudents] = useState(0); 
    
    function enrollStudent() { 
        setStudents(students + 1); 
    } 

    function removeStudent() { 
        if (students > 0) { 
            setStudents(students - 1); 
        } 
    } 

    return ( 
    <section className="panel"> 
        <h2>Enrollment Counter</h2> 
        <p>Registered students: {students}</p> 
        <button onClick={enrollStudent}>Enroll</button> 
        <button onClick={removeStudent}>Remove</button> 
    </section> 
    );
}