import './App.css';
import {Home} from './pages/Home'
import {Nav} from './components/Nav'
import {Posts} from './pages/Posts'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import {Projects} from './components/Projects'
import {Content} from './components/Content'
import {Experience} from './pages/Experience'


function App() {
  return (
    <div className='container'>
          <Nav/>
      <div className='content'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={ <Posts />} />
          <Route path="/experience" element={<Experience />} />
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
