
import './App.css'
import About from './components/About'
import Connect from './components/Connect'
import Main from './components/Main'
import Nav from './components/Nav'
import Projects from './components/projects/Projects'


function App() {

  return (
    <div className='px-24 py-12 bg-black min-h-screen flex flex-col gap-12 justify-between '>
      <Nav />
      <Main />
      <hr />
      <Projects />
      <hr />
      <About />
      <hr />
      <Connect />
    </div>
  )
}

export default App
