import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'


export const Home = () => { 
    
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const populatePost = async () => { 
       setPosts(data)
    }

    useEffect(()=> { 
        populatePost()
    },[])

    if (isLoading) { 
        return <div>Loading....</div>
    }
    return(
        <div>
        {
            posts.map((post)=> { 
                return(
                  <div>
                  <h2>{post.name}</h2>
                  <Link to={`/${post.name}`}>{post.name}</Link>
                  <p>{post.timestamp}</p>
                  <p>tags: { post.tags.map((tag)=> { return(tag + ' ') })}</p>
                  </div>
                )
             
            })
        }
    </div>
    )
    
}