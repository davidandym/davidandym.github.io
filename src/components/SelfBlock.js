import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import face from '../assets/my-face.jpg'
import '../css/self-block.css';

class SelfBlock extends Component {
  render() {
    return (
      <div className="Self-Block">
        <hr className="divider"/>
          <div className="face">
            <Image src={face} className="face-img" roundedCircle={true} />
          </div>
          <div className="face-text">
            <IntroText/>
          </div>
          <hr className="divider"/>
          <News/>
          <hr className="divider"/>
          <Misc/>
          <hr className="divider"/>
      </div>
    )
  }
}

class IntroText extends Component {
  render() {
    return (
      <div>
        <p>I'm a first year Computer Science PhD student at Johns Hopkins University, affiliated with the <a href="https://www.clsp.jhu.edu/" className="text-a">Center for Langauge and Speech Processing.</a></p>
        <p>My research is focused on natural language processing methods which automatically extract structure from text, and applying that structure to applications and downstream tasks.
          I work with my advisor, <a href="http://www.cs.jhu.edu/~mdredze/" className="text-a">Mark Dredze</a>, on multilingual methods for <a href="https://en.wikipedia.org/wiki/Information_extraction" className="text-a">information extraction</a> problems, such as named entity recognition.
        </p>
        <p>
          I completed my B.S. in Computer Science at the <a href="https://www.cs.utexas.edu/" className="text-a">University of Texas at Austin,</a> where I worked with <a href="" className="text-a">Greg Durrett</a> on methods for <a href="https://en.wikipedia.org/wiki/Entity_linking" className="text-a">entity linking</a> in noisy contexts.
        </p>
        <p>You can contact me at dam@jhu.edu.</p>
      </div>
    )
  }
}

class News extends Component {
  render() {
    return (
      <div>
        <h3>
          News
        </h3>
        <ul>
          <li>My life is boring, and there is nothing newsworthy occuring in it.</li>
        </ul>
      </div>
    )
  }
}

class Misc extends Component {
  render() {
    return (
      <div>
        <h3>A little about me...</h3>
        <p>Outside of research I have a few hobbies, including:
          <ul>
            <li>practicing Brazilian Jiu-Jitsu</li>
            <li>being a crappy powerlifter</li>
            <li>learning Pink Floyd solos on guitar</li>
            <li>making horrible attempts at latte art</li>
          </ul>
        </p>
      </div>
    )
  }
}

export default SelfBlock;