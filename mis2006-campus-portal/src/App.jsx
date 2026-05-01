import CourseCard from "./components/CourseCard";
import CourseBadgeClass from "./components/CourseBadgeClass";
import EnrollmentCounter from "./components/EnrollmentCounter";
import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import ApiDemo from "./pages/ApiDemo";

export default function App() {
   return ( 
    <main> 
      <h1>MIS2006 Campus Course Portal</h1> 
        <p>React lab project running in GitHub Codespaces.</p> 
    </main> 
  );
}


export default function App() {
   return ( 
    <main> 
      <h1>MIS2006 Campus Course Portal</h1> 
      
      <CourseCard 
        code="MIS2006" 
        title="Web Programming" 
        instructor="Asst. Prof. Dr. Ergun Eray AKKAYA" 
        credits={3} 
        isOpen={true} 
      /> 
    </main> 
  ); 
}

export default function App() {
  return (
    <main>
      <h1>MIS2006 Campus Course Portal</h1>
        <CourseBadgeClass code="MIS2006" level="Undergraduate" />
    </main> 
  );
}

export default function App() { 
  return ( 
  <main> 
    <h1>MIS2006 Campus Course Portal</h1> 
    <EnrollmentCounter /> 
  </main> 
  );
}

export default function App() { 
  return ( 
  <div className="app-shell"> 
    <header> 
      <h1>MIS2006 Campus Course Portal</h1> 
      <nav> 
        <Link to="/">Home</Link> 
        <Link to="/courses">Courses</Link> 
        <Link to="/register">Register</Link> 
      </nav> 
    </header> 
    
    <main> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="*" element={<p>404 - Page not found</p>} /> 
      </Routes> 
    </main> 
  </div> 
  );
}

export default function App() { 
  return ( 
    <div className="app-shell"> 
      <header> 
        <h1>MIS2006 Campus Course Portal</h1> 
        <nav> 
          <Link to="/">Home</Link> 
          <Link to="/courses">Courses</Link> 
          <Link to="/register">Register</Link> 
          <Link to="/api">API Demo</Link> 
        </nav> 
      </header> 
      
      <main> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/api" element={<ApiDemo />} /> 
          <Route path="*" element={<p>404 - Page not found</p>} /> 
        </Routes> 
      </main> 
    </div> 
  );
}