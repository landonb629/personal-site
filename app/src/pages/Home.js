import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data'
import styled from 'styled-components'
import {FaTags} from 'react-icons/fa'
import {SiKubernetes, SiMicrosoftazure, SiLinux} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'


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
    )
    
}