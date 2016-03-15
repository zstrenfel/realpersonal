// workSection.js
import React from 'react'
import classnames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Visuals extends React.Component {
  handleOnClick(e) {
    let target = e.target;

  }
  loadOptions() {
    let self = this;
    let opts = this.props.options.map(opt => {
      return (<li onClick={this.handleOnClick} key={opt.id}>{opt.title}</li>)}
    );
    return opts
  }
  render() {
    let options = this.loadOptions();
    return (
      <div className="visuals">
        <ul className="visuals-menu">
          {options}
        </ul>
        <div className="visuals-container">
          <img src={'./imgs/projectImgs/logos.png'} />
        </div>
      </div>
    )
  }
}

export default Visuals