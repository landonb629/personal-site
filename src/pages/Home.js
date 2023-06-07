import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'

const Wrapper = styled.div` 
   .post-container { 
       display: flex;
       flex-direction: column;
       justify-content: left;
       padding: 20px;
   }
   .posts-children { 
       padding: 20px;
   }
`
const Button = styled.div`
   .btn-container { 
       background-color: red;
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
        <div className='home-hero'>
        {
            posts.map((post)=> { 
                return(
                  <div className='posts-container'>
                    <div className='posts-children'>
                        <h2 className='title'><Link to={`/${post.location}`}>{post.name}</Link></h2>
                        <p className='timestamp'>{post.timestamp}</p>
                        <p className='tags'>tags: { post.tags.map((tag)=> { return(tag + ' ') })}</p>
                    </div>
                  </div>
                )
            })
        } 
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button style={{height: 25, width: 75, borderRadius: 5, backgroundColor: 'beige'}}>Load More</button>
        </div>
    </Wrapper>
    )
    
}