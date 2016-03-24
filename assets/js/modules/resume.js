// workSection.js
import React from 'react'
import classnames from 'classnames'
import randomColor from 'randomcolor'





class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <div className="section-title" id="resume"><h1>Resume</h1></div>

        <div className="experience">
          <h1> Experience </h1>
          <section>
            <div className="work-title first">
              <span className="left position"><h3>Summer Sessions/Berkeley Study Abroad Summer Front End Intern</h3></span>
              <span className="right date">May 2015 - August 2015</span>
            </div>
            <ul>
              <li>Collaborated in a team to wireframe, prototype, and develop a course management application for summer students at UC Berkeley.</li>
              <li>Developed using HTML, CSS (Bootstrap), Javascript, and JQuery</li>
            </ul>
          </section>
          <section>
            <div className="work-title">
              <span className="left position"><h3>Summer Sessions/Berkeley Study Abroad Marketing/Graphic Design Assistant</h3></span>
              <span className="right date">September 2015 - Ongoing</span>
            </div>
            <ul>
              <li>Create and distribute marketing materials including fliers, social media materials (geofilters, etc), and event signage</li>
              <li>Update website content weekly and organize/perform user testing across different department websites.</li>
            </ul>
          </section>
          <section>
            <div className="work-title">
              <span className="left position"><h3><a href="http://innovativedesign.club/">Innovative Design</a> Marketing Officer/Club Member</h3></span>
              <span className="right date">January 2012 - Ongoing</span>
            </div>
            <ul>
              <li>Co-Marketing Officer for the Fall 2012 Semester - Responsible for organizing/creating recruiting strategy and relevant materials.</li>
              <li>Active participant in the club since Spring 2012; worked with clients to create logos, brochures, websites, etc.</li>
            </ul>
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
            <h3>CS169 - Software Engineering</h3>
            <h3>CS198 - Introduction to Ruby on Rails</h3>
          </section>
        </div>
        <div className="download"> Download a PDF copy of my resume <a href="./imgs/resume.pdf">here</a></div>
      </div>
    )
  }
}

export default Resume