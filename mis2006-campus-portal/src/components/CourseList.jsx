const courses = [ 
    { 
        id: 1, 
        code: "MIS2006", 
        title: "Web Programming", 
        instructor: "Asst. Prof. Dr. Ergun Eray AKKAYA", 
        capacity: 40, enrolled: 28, 
    }, 
    { 
        id: 2, 
        code: "MIS2008", 
        title: "Database Management", 
        instructor: "Department Instructor", 
        capacity: 35, enrolled: 35, 
    }, 
    { 
        id: 3, 
        code: "MIS3010", 
        title: "Business Analytics", 
        instructor: "Department Instructor", 
        capacity: 30, 
        enrolled: 18, 
    },
];

export default function CourseList() { 
    return ( 
    <section className="course-grid"> 
        {courses.map((course) => ( 
            <article key={course.id} className="course-card"> 
                <h2>{course.code}</h2> 
                <h3>{course.title}</h3> 
                <p>Instructor: {course.instructor}</p> 
                <p>Capacity: {course.enrolled}/{course.capacity}</p> 
                <p> 
                    {course.enrolled >= course.capacity 
                        ? "Registration closed" 
                        : "Registration open"} 
                </p> 
            </article> ))}
    </section> 
    );
}