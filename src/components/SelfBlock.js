import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import face from '../assets/my-face.jpg'
import '../css/self-block.css';
import '../css/research-project.css';
import projects from './../assets/researchprojects.json';


class SelfBlock extends Component {
  render() {
    return (
      <div className="Self-Block">
          {/* <div className="face">
			<div className="face-split-img">
            <Image src={face} className="face-img" roundedCircle={false} />
			</div>
			<div className="face-split-bio">
				<BioShort/>
			</div> 
      
          </div> */}

          <IntroText/>
          <hr className="divider"/>
          <News/>
          {/* <hr className="divider"/>
          <Research/> */}
          <hr className="divider"/>
          <Misc/>
      </div>
    )
  }
}

class IntroText extends Component {
  render() {
    return (
      <div className="text-text">
          <div className='IntroSection'>
            <div className='face'>
              <div className='faceImg'>
                <Image src={face} className="face-img" roundedCircle={false} />
              </div>
              <div className='faceLinks'>
                <a href="/papers/cv.pdf" className="fa">CV</a>  &nbsp;
                <a href="https://scholar.google.com/citations?user=TMv0Lw8AAAAJ&hl=en" className="ai ai-google-scholar"></a> &nbsp;
                <a href="https://github.com/davidandym" className="fa fa-github"></a> &nbsp;
                <a href="https://www.linkedin.com/in/davidandym/" className="fa fa-linkedin"></a>
                {/* <a href="https://twitter.com/dam_nlp" className="fa fa-twitter"></a>  */}
              </div>
            </div>

            <div className='IntroText'>
              {/* <h3 className='match-img-text'>Welcome</h3> */}
            <p >
              I'm an <b>Applied Scientist (II) at Amazon</b>.
              I'm a member of the Stores Foundational AI team (SFAI), where I currently work on LLM post-training for the Amazon Rufus chat-bot.</p>
            <p>
              I did my PhD in Computer Science at Johns Hopkins University, where I worked on on <b>transfer learning theory and applications</b>, advised by <a href="http://www.cs.jhu.edu/~mdredze/" className="text-a">Mark Dredze</a> and <a href="https://cs.jhu.edu/~noa/" className="text-a">Nicholas Andrews</a>.
            </p>
            <p>
              <b>You can find my publications <Link className="text-a" to="/publications">here,</Link></b> and you can read more about my research interests over time <Link className="text-a" to="/blog-post/phdiary">here.</Link> I
                also occasionally write <Link className="text-a" to="/blog">blogs</Link> over various research topics or conferences.
            </p>
            {/* <p>
              <b><u>I am currently on the job market, looking for post-doc and industry positions!</u></b>
            </p> */}
            </div>
      </div>
      {/* <p className="notice"><b>I am on the job market!!</b></p> */}
      </div>
    )
  }
}

class News extends Component {
  render() {
    return (
      <div className="text-text">
        <h3>
          News
        </h3>
        <ul className="list">
		 {/* <li> 07/22 - I just released a blog post on my experience at ICML 2022 - <Link className="text-a" to="/blog-post/ICML2022">check it out!</Link></li> */}
     <li>Mar, 25 - <a href="https://sophia-hager.github.io/" className="text-a">Sophia's</a> paper on distillating calibrated confidences into LLMs (which I'm an author on) was just released as a <a href="https://arxiv.org/abs/2503.14749" className="text-a">pre-print!</a></li>
     <li> Dec, 24 - Our paper on exploring how optimization and generalization are connected in transfer learning was just <b>accepted at TMLR!</b></li>
     <li> Dec, 24 - <b>I have accepted a position as an Applied Scientist at <a href="https://www.amazon.science/" className="text-a">Amazon</a></b> on the Scientific Foundations team beginning January of 2025.</li>
     <li>Oct, 24 - Our paper on understanding where in-context learning happens in LLMs, led by <a href="https://suzyahyah.github.io/about/" className="text-a">Suzanna</a>, was <b>accepted at NeurIPS 2024!</b></li>
      </ul>
      </div>
    )
  }
}

class Research extends Component {
  render() {

    var li = projects.projects.map((value, id) => {
      if(id == 0) {
        return (
          <div>
          <ResearchProject
            name={value.name}
            summary={value.summary}
            imgsrc={value.img}
            code={value.code}
            pdf={value.pdf}
            slides={value.slides}
            poster={value.poster}
          />
        </div>
        )
      }
      return (
        <div>
          <hr className="research-project-divider"/>
          <ResearchProject
            name={value.name}
            summary={value.summary}
            imgsrc={value.img}
            code={value.code}
            pdf={value.pdf}
            slides={value.slides}
            poster={value.poster}
          />
        </div>
      )
    });

    return (
      <div className="text-text">
        <h3>
          My Research
        </h3>
        <p>
          My research focuses on developing effective ways to train multi-task and multi-lingual models,
          exploring connections between optimization and generalization in deep learning,
          and uncovering properties of models that leverage transfer learning.
        </p>
        <p>
          While my research has predominantly focused on natural language processing settings, most recently with large language models,
          I have worked on vision tasks for more theoretical work and video processing tasks during my time at Netflix.
        </p>
        <p>
          Below is a sample of the projects I have worked on during my PhD.
        </p>
        {li}
      </div>
    )
  }
}


class ResearchProject extends Component {
  render() {
    return (
      <div>

      <div className='ResearchProject'>
          <h4 className='ProjectTitle'>{this.props.name}</h4>
          <div className="proj-links">
            <PubLink link={this.props.pdf} name={"Paper"}/>
            <PubLink link={this.props.code} name={"Code"}/>
            <PubLink link={this.props.poster} name={"Poster"}/>
            <PubLink link={this.props.slides} name={"Slides"}/>
          </div>
          <div className='project-img-div'>
              <Image src={this.props.imgsrc} className="project-img" roundedCircle={false} />
          </div>
          <p className='ProjectText'>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

class PubLink extends Component {
	render() {
		if (this.props.link == null) {
			return <a/>
		}
		return (
        	<a className="proj-a" href={this.props.link}>{this.props.name}</a>
		)
	}
}

class Misc extends Component {
  render() {
    return (
      <div className="text-text">
        <h3>About Me</h3>
        <p>I am originally from Austin, Texas; I recieved my Bachelor's degree in Computer Science from UT Austin in 2016, and worked as a SWE from 2016 to 2018.</p>
        <p> In 2018 I moved to Baltimore to start my PhD at Johns Hopkins and stayed there for 3 years. Since 2021 I have lived in NYC while I complete my PhD semi-remotely.</p>
        <p>Outside of research I have a few hobbies, including:</p>
        <ul className="list">
          <li>Training Brazilian Jiu-Jitsu, since about 2014. I currently train at <a href="https://marcelogarciajj.com/nyc/" className="text-a">Marcelo Garcia Jiu-Jitsu</a>.</li>
          <li>Making and drinking fun and weird cocktails.</li>
          <li>Trying to improve my latte art. View my progress <a href="https://photos.app.goo.gl/YHK7SrMobdsbG4k66" className="text-a">here</a>.</li>
          <li>Reading, mostly fantasy and science-fiction. See my <a href="http://www.goodreads.com/damueller" className="text-a">goodreads</a>.</li>
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
				<p className="biotext"> 
				<a href="https://twitter.com/dam_nlp" className="fa fa-twitter"></a>  &nbsp;  <a href="https://github.com/davidandym" className="fa fa-github"></a>  &nbsp; <a href="https://scholar.google.com/citations?user=TMv0Lw8AAAAJ&hl=en" className="ai ai-google-scholar"></a>
				</p>
			</div>
		)
	}
}

export default SelfBlock;
