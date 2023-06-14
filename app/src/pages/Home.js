import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'
import {FaTags} from 'react-icons/fa'

const Wrapper = styled.div` 
   .home-hero { 
       display: flex;
       flex-wrap: wrap;
   }
   .posts-children { 
       padding: 20px;
       height: 250px;
       width: 250px;
       border: 2px solid black;
       border-radius: 15px;
       margin: 10px
   }
   .tag-container { 
      display: flex;
      align-items: center;
   }
   .tag { 
       margin: 5px;
       padding: 5px;
       border: solid black 1px;
       border-radius: 15px;
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
                        <h2 className='title'><Link to={`/${post.location}`}>{post.name}</Link></h2>
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