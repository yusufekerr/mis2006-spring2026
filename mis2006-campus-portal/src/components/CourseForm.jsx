import { useState } from "react";

const initialForm = { 
    studentName: "", 
    studentEmail: "", 
    courseCode: "MIS2006", 
    year: "2", 
    acceptedRules: false,
};

export default function CourseForm() { 
    const [form, setForm] = useState(initialForm); 
    const [errors, setErrors] = useState({}); 
    const [submittedData, setSubmittedData] = useState(null); 
    
    function updateField(event) { 
        const { name, value, type, checked } = event.target; 
        
        setForm({ 
            ...form, [name]: type === "checkbox" ? checked : value, 
            }); 
        } 
        
    function validateForm() { 
        const nextErrors = {}; 
        
        if (form.studentName.trim().length < 3) { 
            nextErrors.studentName = "Student name must be at least 3 characters."; 
        } 
        
        if (!form.studentEmail.includes("@")) { 
            nextErrors.studentEmail = "Please enter a valid email address."; 
        } 
        
        if (!form.courseCode) { 
            nextErrors.courseCode = "Please select a course."; 
        } 
        
        if (!form.acceptedRules) { 
            nextErrors.acceptedRules = "You must accept the registration rules."; 
        } return nextErrors; } 
        
    function handleSubmit(event) { 
        event.preventDefault(); 
        
        const validationErrors = validateForm(); 
        setErrors(validationErrors); 
        
        if (Object.keys(validationErrors).length === 0) { 
            setSubmittedData(form); 
            setForm(initialForm); 
        } 
    } 
    
    return ( 
        <section className="form-panel"> 
        <h2>Course Registration</h2> 

        <form onSubmit={handleSubmit} noValidate> 
            <label> 
                Student Name 
                <input 
                    name="studentName" 
                    value={form.studentName} 
                    onChange={updateField} 
                /> 
            </label> 
            
            {errors.studentName && <p className="error">{errors.studentName}</p>}

            <label> 
                Student Email 
                <input 
                    name="studentEmail" 
                    type="email" 
                    value={form.studentEmail} 
                    onChange={updateField} 
                /> 
            </label> 
            
            {errors.studentEmail && <p className="error">{errors.studentEmail}</p>} 
            
            <label> 
                Course 
                <select 
                    name="courseCode" 
                    value={form.courseCode}
                    onChange={updateField} 
                > 
                
                    <option value="MIS2006">MIS2006 - Web Programming</option> 
                    <option value="MIS2008">MIS2008 - Database Management</option>
                    <option value="MIS3010">MIS3010 - Business Analytics</option>
                </select> 
            </label> 
            
            {errors.courseCode && <p className="error">{errors.courseCode}</p>} 
            
            <label> 
                Academic Year 
                <select name="year" value={form.year} onChange={updateField}> 
                    <option value="1">1st Year</option> 
                    <option value="2">2nd Year</option> 
                    <option value="3">3rd Year</option> 
                    <option value="4">4th Year</option> 
                </select> 
            </label> 
            
            <label className="checkbox-row"> 
                <input 
                    name="acceptedRules" 
                    type="checkbox" 
                    checked={form.acceptedRules} 
                    onChange={updateField} 
                /> 
                I accept the registration rules. 
            </label> 
            
            {errors.acceptedRules && <p className="error">{errors.acceptedRules}</p>} 
            
            <button type="submit">Submit Registration</button> 
        </form> 
        
        {submittedData && ( 
            <article className="success-box"> 
                <h3>Submitted Registration</h3> 
                <pre>{JSON.stringify(submittedData, null, 2)}</pre> 
            </article> )} 
        </section> 
    );
}