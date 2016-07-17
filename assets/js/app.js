import React from 'react'
import { render } from 'react-dom'
import Splash from './modules/splash'
import Work from './modules/work'
import Contact from './modules/contact'
import Resume from './modules/resume'
import Nav from './modules/Nav'

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Nav />
        <Splash />
        <Resume />
        <Work />
        <Contact />
      </div>
    )
  }
}

export default App