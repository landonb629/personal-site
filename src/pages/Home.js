import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'

const Wrapper = styled.div` 
   .post-container { 
       display: flex;
       flex-direction: column;
       align-items: left;
   }
   .post { 
       padding: 20px;
   }

`

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
        <Wrapper>
        <div className='post-container'>
        {
            posts.map((post)=> { 
                return(
                  <div className='post'>
                  <h2 className='title'><Link to={`/${post.location}`}>{post.name}</Link></h2>
                  <p className='timestamp'>{post.timestamp}</p>
                  <p className='tags'>tags: { post.tags.map((tag)=> { return(tag + ' ') })}</p>
                  </div>
                )
             
            })
        }
    </div>
    </Wrapper>
    )
    
}