import React from 'react'
import emoji from 'node-emoji'

class Contact extends React.Component{
  render() {
    console.log('I see you creeping on my page ', emoji.get('eyes'));
    return (
      <footer className="contact">
        <ul>
          <li><a href="https://github.com/zstrenfel" target="_blank"><img src={'./imgs/icons/github-with-circle.svg'} /></a></li>
          <li><a href="https://instagram.com/DuckyZach" target="_blank"><img src={'./imgs/icons/instagram.svg'} /></a></li>
          <li><a href="mailto:zwstrenfel@gmail.com" target="_blank"><img src={'./imgs/icons/closed-envelope-circle.svg'} /></a></li>
        </ul>
        <div className="wip"> {emoji.get("construction")} As is life, this site is always a work-in-progress. View the repository <a href="https://github.com/zstrenfel/realpersonal" target="_blank">here</a> {emoji.get("construction")}</div>
      </footer>
    )
  }
}

export default Contact