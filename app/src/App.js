import './App.css';
import {Home} from './pages/Home'
import {Nav} from './components/Nav'
import {Posts} from './pages/Posts'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import {Post} from './components/Post'
import Header from './components/Header'
import {RxHamburgerMenu} from 'react-icons/rx'
import {useState} from 'react'
import {FaAws} from 'react-icons/fa'
import {SiKubernetes, SiMicrosoftazure, SiLinux} from 'react-icons/si'
import {Projects} from './components/Projects'


function App() {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => { 
    setShowNav(!showNav)
  }
  return (
    <div className='container'>
      <div className='nav'>
          <Nav/>
      </div>
      <div className='main'>
        <h1>Landon Babay</h1>
        <div className='icon-container'><FaAws className='icon-home' /><SiKubernetes className='icon-home' /><SiMicrosoftazure className='icon-home'/><SiLinux className='icon-home' /></div>
        <h3>Devops / Cloud Engineer</h3>
      </div>
      <div className='content'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={ <Posts />} />
          <Route path=":id" exact={true} element={ <Post/>}/>
          <Route path="/projects" exact={true} element={ <Projects />} />
      </Routes>
      </div>
      <footer>
        <Header />
      </footer>
    </div>

  );
}

export default App;
