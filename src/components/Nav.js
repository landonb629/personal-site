import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Nav = () => { 
    // Home Tags About Posts
    const Wrapper = styled.div`
        ul { 
            list-style-type: none;

        }
        li { 
            text-decoration: none;
            padding: 16px;
        }
        .container { 
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin: 10px;
            max-width: 100%;
            align-items: left;
            height: 80vh;
        }
        .navbar { 
            display: flex;
            flex-direction: column;
        }
        .nav-links { 
           
        }
    `
    return(
        <Wrapper>
        <div className='container'>
        <div className='intro'>
            <h2>Landon Babay</h2>
            <p>DevOps Engineer</p>
        </div>
        <ul className='navbar'>
            <li className='nav-links'><Link to="/">Home</Link></li>
            <li className='nav-links'><Link to="/about">About</Link></li>
            <li className='nav-links'><Link to="/tags">Tags</Link></li>
            <li className='nav-links'><Link to="/posts">Posts</Link></li>
        </ul>
        </div>
        </Wrapper>
    )
   
}