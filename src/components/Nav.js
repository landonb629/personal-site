import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin} from "react-icons/fa";

export const Nav = () => { 
    // Home Tags About Posts
    const Wrapper = styled.div`
        .container { 
            display: grid;
            text-align: center;
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
        }
        .link:hover { 
            color: white;
        }
        .footer{ 
            position: fixed;
            bottom: 0;
            align-items: center;
        }
        .footer-items{ 
            
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
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/tags" className='link'>Tags</Link>
            <Link to="/posts" className='link'>Posts</Link>
        </nav>
        </div>
        </Wrapper>
    )
   
}