import {Link} from 'react-router-dom'
import {AiFillHome, AiFillTags, AiFillProject} from 'react-icons/ai'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FaTimes} from 'react-icons/fa'

export const Nav = () => { 
    const [toggle, setToggle] = useState(false)
    
    const showNavbar = () => { 
       setToggle(!toggle)
    }

    return(
        <header>
        <nav className={toggle ? 'responsive_nav' : ''}>
                <Link to="/" className='link' onClick={showNavbar}><AiFillHome className='icon'/>Home</Link> 
                <Link to="/experience" className='link' onClick={showNavbar}><MdOutlineDocumentScanner className='icon'/>Experience</Link>
                <Link to="/projects" className='link' onClick={showNavbar}><AiFillProject className='icon'/>Projects</Link>
        </nav>
        <button className={ toggle ? 'nav-btn' : 'nav-btn nav-close-btn'} onClick={showNavbar}>
                    { toggle ? <FaTimes /> : <RxHamburgerMenu />}
                 </button>
        </header>
    )
   
}