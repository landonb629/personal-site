import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaTags} from 'react-icons/fa'
import { data } from '../data'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom'
import Navigator from './Navigator'

const Wrapper = styled.div`
    padding: 15px;
    margin: 15px;
    border-bottom: solid black 1px;
    .container { 
        display: flex;
        justify-content: right;
    }
   .header-items{ 
       padding-right: 15px;
       list-style-type: none;
   }
   
`

const Header = (pathData) => { 
    const {id} = useParams()
   return (
       <Wrapper>
        <div>
            <Navigator />
        </div>
       <div className='container'>
        <li className='header-items'><Link to="https://github.com/landonb629">{<FaGithub />}</Link></li>
        <li className='header-items'><Link to="https://linkedin.com/in/landon-babay">{ <FaLinkedin />}</Link></li>    
       </div>
       </Wrapper>
   )
}

export default Header