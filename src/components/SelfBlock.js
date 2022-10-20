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
        <p>Hi, welcome to my website!
		I'm a fith year Computer Science PhD Candidate at Johns Hopkins University, 
		working at the <a href="clsp.jhu.ed" className="text-a">Center for Language and Speech Processing</a>.
		My research is focused on machine learning, and in particular multi-task optimization in deep neural networks
		and it's applications to natural language processing models.
		I like thinking about optimization landscapes, empirical phenomena in deep learning, and ways to connect theory and practice in modern neural networks.
        I am advised by <a href="http://www.cs.jhu.edu/~mdredze/" className="text-a">Mark Dredze</a> and <a href="https://cs.jhu.edu/~noa/" className="text-a">Nicholas Andrews</a>. 
		You can read more about my research interests over time <Link className="text-a" to="/blog-post/phdiary">here.</Link>
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
		 {/* <li> 07/22 - I just released a blog post on my experience at ICML 2022 - <Link className="text-a" to="/blog-post/ICML2022">check it out!</Link></li> */}
		  <li> 10/22 - I'm currently looking for ML internships for the Summer/Spring of 2023. Please reach out if you think I'd be a good fit!</li>
		  <li> 10/22 - I'll be attending NeurIPS and EMNLP this year to present some of my recent work! Let me know if you'd like to meet up!</li>
		  <li> 08/21 - I recently moved to New York City - if you're around Manhattan and want to grab a coffee sometime, email me!</li>
		  <li> 12/19 - I was a TA for <a href="http://www.cs475.org/fall2019/" className="text-a">Machine Learning</a> this past fall of 2019!</li>
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
          <li>Training and competing in Brazilian Jiu-Jitsu (although, not since COVID-19).</li>
          <li>Improving my cooking skills, with a recent focus on vegetarian cuisine.</li>
          <li>Trying to improve my latte art game. You can view my progress <a href="https://photos.app.goo.gl/YHK7SrMobdsbG4k66" className="text-a">here</a>.</li>
          <li>Reading, mostly fantasy and science-fiction. Add me on <a href="http://www.goodreads.com/damueller" className="text-a">goodreads</a>.</li>
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
				<p className="biohead2"> PhD Candidate </p>
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
