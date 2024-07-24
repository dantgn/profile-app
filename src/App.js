import './App.css';
import About from './components/About'
import Path from './components/Path'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App p-2 md:p-16">
      <About />
      <Path />
      <Projects />
      <Skills />
      <Contact /> 
    </div>
  );
}

export default App;
