import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'

export const Project = () => { 
    const {id} = useParams()
    const [content, setContent] = useState()

    useEffect(()=> { 
        console.log(id)
    },[])
    return(
        <div>Project</div>
    )
}

