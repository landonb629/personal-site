import './App.css';
import ReactMarkdown from 'react-markdown'
import {Home} from './pages/Home'
import { About } from './pages/About';
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {Posts} from './pages/Posts'
import {Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import { SinglePost } from './components/SinglePost';
import {Post} from './components/Post'
import Header from './components/Header'

function App() {
  const Wrapper = styled.div`
      .grid-container { 
        display: grid;
        grid-template-columns: .75fr 2fr 2fr;
        grid-template-rows: .1fr auto auto;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
      }
      .grid-header { 
        grid-column: 2/4;
        grid-row: 1/2;
      }
      .grid-main { 
        grid-column: 2/4;
        grid-row: 2/3;
      }
      .grid-menu { 
        grid-column: 1/2;
        grid-row: 1/4;
        background-color: #233142;
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 25px;
        border-right: 1px #F6F6F6 solid;
      }
      `


  return (
    <Wrapper>
    <div className='grid-container'>
      <div className='grid-header'>
        <Header/>
      </div>
      <div className='grid-menu'>
          <Nav />
      </div>
      <div className='grid-main'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={ <Posts />} />
          <Route path=":id" exact={true} element={ <Post/>}/>
      </Routes>
      </div>
    </div>
    </Wrapper> 
  );
}

export default App;
