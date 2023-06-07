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
      .grid-container { 
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        grid-template-rows:  auto auto auto;
        width: 100vw;
        height: 100vh;
      }
      .grid-header { 
        padding: 15px;
        margin: 15px; 
        grid-column: 2/4;
      }  
      .grid-footer { 
        padding: 15px;
        margin: 15px;
        grid-column: 2/4;
        grid-row: 3/4;
      }
      .grid-main { 
        grid-column: 2/4;
        grid-row: 2/3;
        text-align: center;
      }
      .grid-menu { 
        grid-column: 1/2;
        grid-row: 1/4;
        background-color: #4B5320;
        height: 100%;
      }
      `


  return (
    <Wrapper>
    <div className='grid-container'>
      <div className='grid-header'>
      </div>
      <div className='grid-menu'>
          <Nav />
      </div>
      <div className='grid-main'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={ <About />} />
          <Route path="/posts" element={ <Posts />} />
          <Route path=":id" exact={true} element={ <Post/>}/>
      </Routes>
      </div>
    <footer className='grid-footer'>
          <Footer />
    </footer>
    </div>
    </Wrapper> 
  );
}

export default App;
