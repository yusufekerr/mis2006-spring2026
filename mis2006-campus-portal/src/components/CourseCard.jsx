export default function CourseCard({ code, title, instructor, credits, isOpen }) {
     return ( 
        <article className="course-card"> 
            <h2>{code}: {title}</h2> 
            <p><strong>Instructor:</strong> {instructor}</p> 
            <p><strong>Credits:</strong> {credits}</p> 
            <p className={isOpen ? "status-open" : "status-closed"}> 
                {isOpen ? "Registration Open" : "Registration Closed"} 
            </p> 
        </article> 
    );
}