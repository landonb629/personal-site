import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'
import {FaTags} from 'react-icons/fa'

const Wrapper = styled.div`
   .home-hero { 
       color: #233142;
       justify-content: center;
   }
   .posts-children { 
       padding: 20px;
       margin: 10px;
       border-bottom: 1px solid #f95959;
   }
   .tag-container { 
      display: flex;
      align-items: center;
   }
   .tag { 
       font-size: 10px;
       margin: 5px;
       padding: 5px;
       border-radius: 10px;
       border: 1px solid #233142;
   }
   .title { 
       text-decoration: none;
       color: #233142;
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
        const getFromAPI = async () => { 
            try {
                console.log('running static webapp backend')
                const request = await fetch("/api/message/")
                const response = await request.json()
                console.log(response)
            } catch(error) { 
                console.log('didnt return anything');
            }
        }
        getFromAPI()
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
                        <h2 className='title'><Link className='title' to={`/${post.location}`}>{post.name}</Link></h2>
                        <p className='timestamp'>{post.timestamp}</p> 
                        <div className='tag-container'>
                        <FaTags />
                        {
                        post.tags.map((tag)=>  {
                            return(
                                <p className='tag'>{tag}</p>
                            )
                        })
                        } 
                        </div>
                    </div>
                  </div>
                )
            })
        } 
        </div>
    </Wrapper>
    )
    
}