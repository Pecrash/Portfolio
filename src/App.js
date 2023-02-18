import React from 'react';
import Introduction from './layout/introduction';
import About from './layout/about';
import Skills from './layout/skills';
import Projects from './layout/projects';
import Services from './layout/services';
import Form from './components/form';
import "./scss/App.scss"

function App() {
  return (
    <React.Fragment>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Services/>
      <Form />
    </React.Fragment>
  );
}

export default App;
