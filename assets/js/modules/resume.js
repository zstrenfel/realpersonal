// workSection.js
import React from 'react'
import classnames from 'classnames'
import randomColor from 'randomcolor'





class Resume extends React.Component {
  render() {
    return (
      <div className="resume" id="resume">
        <div className="experience">
          <h1> Experience </h1>
          <section>
            <div className="work-title">
              <span className="left"><h3>Summer Sessions/Berkeley Study Abroad Summer Front End Intern</h3></span>
              <span className="right">May 2015 - August 2015</span>
            </div>
            <p>Worked in a team of two to wireframe, prototype, and develop a course management application for summer students at UC Berkeley. Developed using HTML, CSS (Bootstrap), Javascript, and JQuery</p>
          </section>
        </div>
        <div className="skills">
          <h1> Skills </h1>
          <section>
            <h3> Experienced </h3>
            <p> HTML, CSS (SASS), Adobe Photoshop, Adobe Illustrator </p>
          </section>
           <section>
            <h3> Proficient </h3>
            <p> Python, Java, Javascript, JQuery, React.js, Github, Gulp, Ruby on Rails, Sketch, Bootstrap</p>
          </section>
          <section>
            <h3> Exposure </h3>
            <p> Node.js, Express.js, SQL, React Router, Redux, Webpack, Google Chrome Extensions API, Wordpress</p>
          </section>
        </div>
        <div className="course-work">
          <h1> Relevant Coursework </h1>
          <section>
            <h3>CS61A - Structure and Interpretation of Computer Programs</h3>
            <h3>CS61B - Data Structures</h3>
            <h3>CS61A - Software Engineering</h3>
          </section>
        </div>
        <div className="download"> Download a PDF copy of my resume <a href="./imgs/Strenfel-03-2016.pdf">here</a></div>
      </div>
    )
  }
}

export default Resume