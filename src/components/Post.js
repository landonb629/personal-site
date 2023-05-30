import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';


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
        <div>
         <ReactMarkdown children={content} />
         <Link to="/">back</Link>
        </div>
    )
}