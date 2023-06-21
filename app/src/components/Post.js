import { useEffect, useState } from 'react';
import {useParams, Link, useLocation} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'
import { useAppContext } from '../contexts/global';

const Wrapper = styled.div`
    padding-left: 50px;
    margin-left: 150px;
    margin-right: 150px;
    
    ul { 
        list-style-type: none;
    }
    h1{ 
        padding: 35px;
        text-decoration: underline;
    }
    p { 
        padding: 15px;
        font-size: 18px;
    }
    h3 { 
        text-decoration: underline;
        padding: 15px
    }
    li { 
        padding-left: 10px;
    }
    code { 
        font-size: 15px;

    }
`


export const Post = (props) => { 
    const {id} = useParams()
    const [content, setContent] = useState()
    const {page, setPage} = useAppContext()
    const location = useLocation()
    const {type} = location.state


    const fetchPost = async () => { 
        const post = await import(`../posts/${id}.md`)
        const posts = await fetch(post.default)
        const text = await posts.text()
        setContent(text)
      }
 
    useEffect(()=> {
        console.log(type)
        console.log(id)
        setPage(id)
        const getPosts = async () => { 
            await fetchPost()
        }
        getPosts()
    },[])
    return(
        <Wrapper>
         <ReactMarkdown children={content} />
        </Wrapper>
    )
}