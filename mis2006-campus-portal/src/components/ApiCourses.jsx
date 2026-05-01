import { useEffect, useState } from "react";

export default function ApiCourses() { 
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 
    
    useEffect(() => { 
        const controller = new AbortController(); 
        
        async function loadPosts() { 
            try { 
                const response = await fetch( 
                    "https://jsonplaceholder.typicode.com/posts?_limit=5", 
                    { signal: controller.signal } 
                ); 
                
                if (!response.ok) { 
                    throw new Error("API request failed."); 
                } 
                
                const data = await response.json();
                setPosts(data); 
            } catch (requestError) { 
                if (requestError.name !== "AbortError") { 
                    setError(requestError.message); 
                } 
            } finally { 
                setLoading(false); 
            } 
        } 
        
        
        loadPosts(); 
        
        return () => { 
            controller.abort(); 
        }; 
    }, []); 
    
    if (loading) { 
        return <p>Loading API data...</p>; 
    } 
    
    if (error) { 
        return <p className="error">{error}</p>; 
    } 
    
    return ( 
    <section> 
        <h2>API Course Announcements</h2> 
        <ul> {posts.map((post) => ( 
            <li key={post.id}> 
                <strong>{post.title}</strong> 
                <p>{post.body}</p> 
            </li> 
            ))} 
        </ul> 
    </section> 
    );
}