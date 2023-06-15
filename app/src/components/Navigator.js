import { useContext, useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useAppContext } from '../contexts/global'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styled from 'styled-components'



const Navigator = () => { 
    const [navigate, setNavigate] = useState('')
    const [loading, setLoading] = useState(true)
    const {page, setPage} = useAppContext()
    const [isNull, setIsNull] = useState(true)

    const Wrapper = styled.div`
        .text:hover { 
            color: #f95959;
        }
        .text {
            text-decoration: none;
        }
    `

    useEffect(() =>{ 
        if (page) { 
            setIsNull(false)
            console.log(page)
            console.log('there is a page')
        } else { 
            setIsNull(true)
        }
    },[page])
    return(
        <Wrapper>
            {
               isNull ? <div className='text'>Home</div> : <div className='text'><Link to="/" className='text' onClick={()=>setPage(undefined)}>Home</Link> <AiOutlineArrowRight/>{page}</div>
            }
        </Wrapper>
    )
   
    
}

export default Navigator