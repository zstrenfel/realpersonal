// workSection.js
import React from 'react'
import classnames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import emoji from 'node-emoji'
import Gallery from './visualGallery'



class Visuals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Logos',
      loading: false
    }
  }
  handleOnClick(e) {
    let target = e.target;
    if (target.tagName === 'LI') {
      this.setState({active: target.innerHTML, loading: true}, () => {
        console.log('callback');
        setTimeout(this.setState({loading: false}), 500);
        })
    }
  }

  loadOptions() {
    let self = this;
    let keys = Object.keys(this.props.data);
    let opts = keys.map(opt => {
      let classes = self.state.active === opt ? classnames('active') : null;
      return (<li className={classes} key={opt}>{opt}</li>)}
    );
    return opts
  }
  render() {
    let options = this.loadOptions();
    let body = !this.state.loading ? <Gallery active={this.state.active} data={this.props.data}/> : null;
    return (
      <div className="visuals">
        <ul className="visuals-menu" onClick={this.handleOnClick.bind(this)}>
          {options}
        </ul>
        {body}
      </div>
    )
  }
}

export default Visuals