import React from 'react';
import randomColor from 'randomcolor'


class Splash extends React.Component{
  render() {
   return (
      <div className="splash">
        <div className="half-column image-container">
          <img src={'./imgs/me.png'} />
        </div>
        <div className="half-column text rise">
          <h2>Hello, I'm </h2>
           <h1>Zach Strenfel</h1>
           <p>
              Currently a senior @ UC Berkeley studying Media Studies,
              with a passion for <b> Front-End Web Development</b>, <b>Design</b>, and <b>UI/UX</b>.
          </p>
          <div className="contact">
            <ul>
              <li><a href="https://github.com/zstrenfel" target="_blank"><img src={'./imgs/icons/github-with-circle.svg'} /></a></li>
              <li><a href="https://twitter.com/DuckyZach" target="_blank"><img src={'./imgs/icons/twitter-with-circle.svg'} /></a></li>
              <li><a href="mailto:zwstrenfel@gmail.com" target="_blank"><img src={'./imgs/icons/closed-envelope-circle.svg'} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash