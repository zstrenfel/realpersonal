import React from 'react';
import randomColor from 'randomcolor'


class Splash extends React.Component{
  render() {
   return (
      <div className="splash" id="about">
        <div className="half-column image-container">
          <img src={'./imgs/me.png'} />
        </div>
        <div className="half-column text rise">
          <h2>Hello, I'm </h2>
           <h1>Zach Strenfel</h1>
           <p>
              Alum of UC Berkeley; meditation enthusiest with an
              interest in <b> Mobile </b> and <b>Front-End Web Development</b>, <b>Design</b>, and <b>UI/UX</b>.
          </p>
          <div className="contact">
            <ul>
              <li><a href="https://github.com/zstrenfel" target="_blank"><img src={'./imgs/icons/github-with-circle.svg'} /></a></li>
              <li><a href="mailto:zwstrenfel@gmail.com" target="_blank"><img src={'./imgs/icons/closed-envelope-circle.svg'} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash