import './App.css';
import {Home} from './pages/Home'
import {Nav} from './components/Nav'
import {Posts} from './pages/Posts'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import {RxHamburgerMenu} from 'react-icons/rx'
import {useState} from 'react'
import {FaAws} from 'react-icons/fa'
import {SiKubernetes, SiMicrosoftazure, SiLinux} from 'react-icons/si'
import {Projects} from './components/Projects'
import {Content} from './components/Content'


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
      
      <div className='content'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={ <Posts />} />
          <Route path="/projects" exact={true} element={ <Projects />} />
          <Route path="/projects/:id" exact={true} element={ <Content/>} />
          <Route path="/posts/:id" exact={true} element={ <Content/>}/>
      </Routes>
      </div>
      <footer>
        <Header />
      </footer>
    </div>

  );
}

export default App;
