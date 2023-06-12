import { useContext, useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useAppContext } from '../contexts/global'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Navigator = () => { 
    const [navigate, setNavigate] = useState('')
    const [loading, setLoading] = useState(true)
    const {page, setPage} = useAppContext()
    const [isNull, setIsNull] = useState(true)

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
        <div>
            {
               isNull ? <div>Home</div> : <div><Link to="/" onClick={()=>setPage(undefined)}>Home</Link> <AiOutlineArrowRight/> {page}</div>
            }
        </div>
    )
   
    
}

export default Navigator