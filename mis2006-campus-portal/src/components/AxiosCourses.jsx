import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosCourses() { 
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 
    
    useEffect(() => { 
        async function loadPosts() { 
            try { 
                const response = await axios.get( 
                    "https://jsonplaceholder.typicode.com/posts?_limit=5", 
                    { timeout: 5000 } 
                ); 
                
                setPosts(response.data); 
            } catch (requestError) { 
                setError("Axios request failed."); 
            } finally { 
                setLoading(false); 
            } 
        } 
        
        loadPosts(); 
    }, []); 
    
    if (loading) return <p>Loading with Axios...</p>; 
    if (error) return <p className="error">{error}</p>; 
    
    return ( 
    <section> 
        <h2>Axios Announcements</h2> 
        {posts.map((post) => ( 
            <article key={post.id} className="course-card"> 
                <h3>{post.title}</h3> 
                <p>{post.body}</p> 
            </article> 
        ))} 
    </section> 
    );
}