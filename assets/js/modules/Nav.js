import React from 'react'
import $ from 'jquery'

class Nav extends React.Component {

  navigateTo(e) {
    e.preventDefault();
    let target = e.target.innerHTML.toLowerCase()
    $('html,body').animate({scrollTop: $("#"+target).offset().top - 60},400);
  }
  render() {
    return (
      <div className="top-nav">
        <ul>
          <li><a onClick={this.navigateTo}>About</a></li>
          <li><a onClick={this.navigateTo}>Resume</a></li>
          <li><a onClick={this.navigateTo}>Projects</a></li>
          <li><a onClick={this.navigateTo}>Visuals</a></li>
        </ul>
      </div>
    )
  }
}

export default Nav;