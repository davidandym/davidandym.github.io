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
        <p>Hi, welcome to my website. 
		I'm a third year Computer Science PhD student at Johns Hopkins University, 
		working at the <a href="clsp.jhu.ed" className="text-a">Center for Language and Speech Processing</a>.
		My research is focused on natural language processing and machine learning.
		I'm particularly interested in optimization landscapes, multi-objective optimization, and multilingual models.
        I am advised by <a href="http://www.cs.jhu.edu/~mdredze/" className="text-a">Mark Dredze</a> and <a href="https://cs.jhu.edu/~noa/" className="text-a">Nicholas Andrews</a>. 
		You can read more about my research interests over time <Link className="text-a" to="/research-interests">here.</Link>
        </p>
        <p>
          Prior to attending JHU, I completed my B.S. in Computer Science at the <a href="https://www.cs.utexas.edu/" className="text-a">University of Texas at Austin,</a> where I worked with <a href="https://www.cs.utexas.edu/~gdurrett/" className="text-a">Greg Durrett</a> on methods for <a href="https://www.aclweb.org/anthology/D18-1126/" className="text-a">entity linking</a> in noisy contexts.
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
		  <li> 07/20 - I'll also be attending <a href="https://icml.cc/Conferences/2020" className="text-a">ICML 2020</a> online.</li>
		  <li> 06/20 - I'll be presenting our <a href="https://www.aclweb.org/anthology/2020.acl-main.720/" className="text-a">paper</a> at <a href="https://acl2020.org/" className="text-a">ACL 2020</a> online.</li>
		  <li> 12/19 - I was a TA for <a href="http://www.cs475.org/fall2019/" className="text-a">Machine Learning</a> this past fall of 2019!</li>
          <li> 05/19 - I'll be participating in <a href="https://hltcoe.jhu.edu/research/scale/scale-2019/" className="text-a">SCALE 2019</a> this summer. </li>
          <li>10/18 - I attended <a href="https://emnlp2018.org/" className="text-a">EMNLP 2018</a> in Brussels, Belgium. It was my first NLP conference :)</li>
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
          <li>Training and competing in Brazilian Jiu-Jitsu at <a href="https://www.formjiujitsu.com/" className="text-a">Form Jiu-Jitsu</a> (Although, due to COVID-19, I have been unable to train for most of 2020).</li>
          <li>Improving my cooking skills, with a recent focus on vegetarian cuisine.</li>
          <li>Trying to improve my latte art game. You can view my progress <a href="https://photos.app.goo.gl/YHK7SrMobdsbG4k66" className="text-a">here</a>.</li>
          <li>Reading, mostly fantasy and science-fiction. Add me on <a href="http://www.goodreads.com/damueller" className="text-a">goodreads</a> to see what I'm currently reading.</li>
		  <li>I also sometimes play video games, I'm a big fan of <a href="https://playvalorant.com/en-us/" className="text-a">Valorant</a> at the moment.</li>
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
				<p className="biotext1"> Johns Hopkins University </p>
				<p className="biotext">dam@jhu.edu</p>
				<p className="biotext"> 
				<a href="https://twitter.com/dam_nlp" className="fa fa-twitter"></a>  &nbsp;  <a href="https://github.com/davidandym" className="fa fa-github"></a>  &nbsp; <a href="https://scholar.google.com/citations?user=TMv0Lw8AAAAJ&hl=en" className="ai ai-google-scholar"></a> &nbsp; <a href="https://www.semanticscholar.org/author/David-Mueller/143669098" className="ai ai-semantic-scholar"></a>
				</p>
			</div>
		)
	}
}

export default SelfBlock;
