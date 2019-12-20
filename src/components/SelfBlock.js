import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import face from '../assets/my-face.jpg'
import '../css/self-block.css';

class SelfBlock extends Component {
  render() {
    return (
      <div className="Self-Block">
          <div className="face">
			<div className="face-split-img">
            <Image src={face} className="face-img" roundedCircle={false} />
			</div>
			<div className="face-split-bio">
				<BioShort/>
			</div>
          </div>
          <IntroText/>
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
      <div className="text-text">
        <p>My research is focused on natural language processing methods which automatically extract structure from text, and applying that structure to applications and downstream tasks.
          I work with my advisor, <a href="http://www.cs.jhu.edu/~mdredze/" className="text-a">Mark Dredze</a>, on multilingual methods for <a href="https://en.wikipedia.org/wiki/Information_extraction" className="text-a">information extraction</a> problems. You can read more about my research interests over time <Link className="text-a" to="/research-interests">here.</Link>
		
        </p>
        <p>
          Prior to attending JHU, I completed my B.S. in Computer Science at the <a href="https://www.cs.utexas.edu/" className="text-a">University of Texas at Austin,</a> where I worked with <a href="https://www.cs.utexas.edu/~gdurrett/" className="text-a">Greg Durrett</a> on methods for <a href="https://en.wikipedia.org/wiki/Entity_linking" className="text-a">entity linking</a> in noisy contexts.
        </p>
      </div>
    )
  }
}

class News extends Component {
  render() {
    return (
      <div className="text-text">
        <h3>
          What I'm Up To
        </h3>
        <ul className="list">
		  <li>I was a TA for <a href="http://www.cs475.org/fall2019/" className="text-a">Machine Learning</a> this past fall of 2019!</li>
          <li>I'll be participating in <a href="https://hltcoe.jhu.edu/research/scale/scale-2019/" className="text-a">SCALE 2019</a> this summer! </li>
          <li>This past October I attended <a href="https://emnlp2018.org/" className="text-a">EMNLP 2018</a> in Brussels, Belgium. It was my first NLP conference :)</li>
        </ul>
      </div>
    )
  }
}

class Misc extends Component {
  render() {
    return (
      <div className="text-text">
        <h3>A little about me...</h3>
        <p>Outside of research I have a few hobbies, including:</p>
        <ul className="list">
          <li>Training and competing in Brazilian Jiu-Jitsu at <a href="https://www.formjiujitsu.com/" className="text-a">Form</a> and the <a href="https://www.facebook.com/groups/2201204403" className="text-a">Johns Hopkins BJJ Club</a>.</li>
          <li>Improving my cooking skills, with a recent focus on vegetarian cuisine.</li>
          <li>Trying to improve my latte art game. You can view my progress <a href="https://photos.app.goo.gl/YHK7SrMobdsbG4k66" className="text-a">here</a>.</li>
        </ul>
      </div>
    )
  }
}

class BioShort extends Component {
	render() {
		return (
			<div className="biobox">
				<p className="biohead1"> David Mueller</p>
				<p className="biohead2"> PhD Student </p>
				<p className="biotext1"> Center for Language and Speech Processing </p>
				<p className="biotext1"> Johns Hopkins University </p>
				<p className="biotext"> 
				<a href="https://twitter.com/dam_nlp" className="text-a">Twitter</a>, <a href="https://scholar.google.com/citations?user=TMv0Lw8AAAAJ&hl=en" className="text-a">Google Scholar</a>, <a href="https://www.semanticscholar.org/author/David-Mueller/143669098" className="text-a">Semantic Scholar</a>
				</p>
				<p className="biotext">Contact me at dam@jhu.edu</p>
			</div>
		)
	}
}

export default SelfBlock;
