import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillHome, AiFillTags, AiFillProject} from 'react-icons/ai'

export const Nav = () => { 
    // Home Tags About Posts
    const Wrapper = styled.div`
        color: #e3e3e3;
        .container { 
            display: grid;
            text-align: center;
            row-gap: 150px;
        }
        .grid-header { 
            grid-column: 1/3;
        }
        ul { 
            list-style-type: none;
        }
        .navbar { 
            grid-column: 1/3;
            display: grid;
        }
        .link { 
            padding: 20px;
            text-decoration: none;
            color: #e3e3e3;
        }
        .link:hover { 
            color: #f95959;
        }
        .footer{ 
            position: fixed;
            bottom: 0;
            align-items: center;
        }
        .link-container { 
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .icon { 
            padding-right: 15px;
        }
    `
    return(
        <Wrapper>
        <div className='container'>
        <div className='grid-header'>
            <h2>Landon Babay</h2>
            <p>DevOps Engineer</p>
        </div>
        <nav className='navbar'>
            <div className='link-container'>
                <Link to="/" className='link'><AiFillHome className='icon'/>Home</Link>
            </div>
            <div className='link-container'> 
                <Link to="/tags" className='link'><AiFillTags className='icon'/>Tags</Link>
            </div>
            <div className='link-container'>
                <Link to="/Projects" className='link'><AiFillProject className='icon'/>Projects</Link>
            </div>
            
        </nav>
        </div>
        </Wrapper>
    )
   
}