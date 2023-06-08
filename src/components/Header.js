import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaTags} from 'react-icons/fa'
import { data } from '../data'

const Wrapper = styled.div`
    display: flex;

    .tags { 
        padding: 15px;
    }
`

const Header = () => { 
    const [tags, setTags] = useState([])

    useEffect(()=> { 
        const getTags = async () => { 
            const postTags = []
            data.map((tag)=> { 
                tag.tags.map((each)=> { 
                    postTags.push(each)
                })
            })
            setTags(postTags)
        }
        getTags()
        console.log(tags)
    },[])
    return(
        <div>
        <p>Tags: </p>
       <Wrapper>
            {
                tags.map((tag)=> { 
                    return(
                        <p className='tags'><FaTags />{tag}</p>
                    )
                })
            }
        </Wrapper>
        </div>
    )
}

export default Header