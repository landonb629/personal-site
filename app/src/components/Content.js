import {useParams, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-left: 50px;
    margin-left: 150px;
    margin-right: 150px;
    
    ul { 
        padding-left: 50px;
        margin: 10px;
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
        padding: 20px
    }
    li { 
     
    }
    code { 
        font-size: 15px;
        padding: 5px;
        border-radius: 15px;
    }
    @media(max-width: 460px){
        margin: 0;
        padding: 0;
        font-size: 12px;

        code { 
            font-size: 12px;
            overflow: scroll;
            height: 200px;
        }
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