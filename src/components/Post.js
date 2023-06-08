import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'

const Wrapper = styled.div`
    h1 { 
        text-align: center;
        padding: 50px
    }
    h3 { 
        text-align: center;
        text-decoration: underline;
    }
    p { 
        padding: 25px;
        padding-bottom: 100px;
        width: 65%;
    }
    
`


export const Post = () => { 
    const {id} = useParams()
    const [content, setContent] = useState()

    const fetchPost = async () => { 
        const post = await import(`../posts/${id}.md`)
        const posts = await fetch(post.default)
        const text = await posts.text()
        setContent(text)
      }
    //  useEffect(() => { 
    //    const getPosts = async () => { 
    //      await fetchPost()
    //    } 
     //   getPosts()
    //  },[])

    useEffect(()=> {
        const getPosts = async () => { 
            await fetchPost()
        }
        getPosts()
    },[])
    return(
        <Wrapper>
        <div className='content'>
         <ReactMarkdown children={content} />
         <Link to="/">back</Link>
        </div>
        </Wrapper>
    )
}