import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'
/*
const Wrapper = styled.div` 
    .grid-container { 
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        padding: 10px;
    }
    .grid-header {
        grid-column-start: 1;
        grid-column-end: 4;
        justify-content: center;
    }
    .grid-menu { 
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 0;
        grid-row-end: 3;
    }
    .grid-footer { 
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
    }
    .grid-body { 
        grid-column-start: 2;
        grid-column-end: 4;
    }
`
*/

export const Home = () => { 
    
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const populatePost = async () => { 
       setPosts(data)
    }

    useEffect(()=> { 
        populatePost()
        console.log(posts)
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