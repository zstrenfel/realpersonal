// workSection.js
import React from 'react'
import classnames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Project from './project'
import data from '../projectsData'
import randomColor from 'randomcolor'
import Visuals from './visuals'




class Work extends React.Component {
  loadProjects() {
    let projs = data.projects.map(proj => {
      let align = proj.id % 2 !== 0 ? 'right' : 'left';
      return (<Project data={proj} key={proj.id} align={align}/>)}
    );
    return projs
  }
  render() {
    let projects = this.loadProjects();
    let colorBlock = {backgroundColor: randomColor()};
    return (
      <div className="work">
        <div className="section-title"><h1>Projects</h1></div>
        <div className="projects">
          {projects}
        </div>
        <div className="section-title"><h1>Visuals</h1></div>
          <Visuals data={data.visuals}/>
      </div>
    )
  }
}

export default Work