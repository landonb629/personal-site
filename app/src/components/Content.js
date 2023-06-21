import {useParams, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

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

export const Content = () => { 
    const [content, setContent] = useState()
    const {id} = useParams()
    // useLocation is how we are pulling the "type" from the Link send
    const location = useLocation()
    // passing type which is == to either "posts" or "projects"
    const {type} = location.state

    const fetchData = async () => { 
        const importData = await import(`../${type}/${id}.md`)
        const requestData = await fetch(importData.default)
        const text = await requestData.text()
        setContent(text)
    }

    useEffect(() => { 
        const getData = async () => { 
            await fetchData()
        }
        getData()

    },[])

   return(
        <Wrapper>
            <ReactMarkdown children={content} />
        </Wrapper>
   )
}