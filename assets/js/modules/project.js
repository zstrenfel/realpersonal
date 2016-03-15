import React from 'react'
import classnames from 'classnames'



class Project extends React.Component {
  render() {
    var classname = classnames(this.props.data.title, 'project', this.props.align);
    return (
          <div className={classname}>
            <div className="project-img">
              <img src={this.props.data.imgPath} />
            </div>
            <div className="project-info">
              <h1> {this.props.data.title} </h1>
              {this.props.data.tags}
              <p> {this.props.data.body} </p>
              <aside> View the repository <a href={this.props.data.url} target="_blank">here</a></aside>
            </div>

          </div>
    )
  }
}

export default Project