// workSection.js
import React from 'react'
import classnames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from 'react-addons-transition-group'
import emoji from 'node-emoji'



class VisualGallery extends React.Component {
  componentDidLeave() {
    console.log("compoenent left");
  }
  loadChildren(active, data) {
    if (data[active].length === 0) {
      return (<div className="wip">{emoji.get('sweat_smile')}<br />This section is still under construction. Check back later for updates! </div>);
    } else {
      var childs = data[active].map(opt => {
        let classes = classnames('element', opt.class)
        return (<div key={opt.title} className={classes}><img src={opt.url}/></div>)
      });
    }
    return childs
  }
  render() {
    let children= this.loadChildren(this.props.active, this.props.data);
    return (
      <ReactCSSTransitionGroup transitionName="swipe" transitionAppear={true} transitionAppearTimeout={600} transitionLeave={false} component="div" className="visual-container">
        {children}
      </ReactCSSTransitionGroup>
    )
  }
}

export default VisualGallery