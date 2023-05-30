import './App.css';
import ReactMarkdown from 'react-markdown'
import {Home} from './pages/Home'
import { About } from './pages/About';
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {Posts} from './pages/Posts'
import {Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { SinglePost } from './components/SinglePost';
import {Post} from './components/Post'

function App() {
  const [readable, setReadable] = useState("")

  const Wrapper = styled.div`
      .left { 
        width: 25%;
        float: left;
      }
      html { 
        box-sizing: border-box;
      }
  `

  /*
  
  */
  return (
    <Wrapper>
    <div className='app'>
      <div className='left'>
          <Nav />
      </div>
      <main>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={ <About />} />
          <Route path="/posts" element={ <Posts />} />
          <Route path=":id" exact={true} element={ <Post/>}/>
      </Routes>
      </main>
    <footer className=''>
          <Footer />
    </footer>
    </div>
    </Wrapper> 
    /*
    <div>
      <ReactMarkdown children={readable}/>
    </div>

    */
  );
}

export default App;
