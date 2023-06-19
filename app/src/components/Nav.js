import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillHome, AiFillTags, AiFillProject} from 'react-icons/ai'
import { useAppContext } from '../contexts/global';
import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

export const Nav = () => { 
    const {page, setPage} = useAppContext()
    const [hidden, setHidden] = useState()
    // Home Tags About Posts
    const clearPage = () => { 
        setPage('')
    }
    return(
        <nav className='navbar'>
            <div className='right'>
            <div className='link-container'>
                <Link to="/" className='link' onClick={()=> clearPage()}><AiFillHome className='icon'/>Home</Link>
            </div>
            <div className='link-container'> 
                <Link to="/tags" className='link'><AiFillTags className='icon'/>Tags</Link>
            </div>
            <div className='link-container'>
                <Link to="/Projects" className='link'><AiFillProject className='icon'/>Projects</Link>
            </div>
            </div>
        </nav>
    )
   
}