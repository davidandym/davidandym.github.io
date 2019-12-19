import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import face from '../assets/my-face.jpg'
import '../css/self-block.css';

class Interests extends Component {
  render() {
    return (
      <div className="Self-Block">
        <h3 className="welcome-text">Research Interests</h3>
		<p> I thought it might be interesting to keep track of how my research interests evolve over time.
			The following is a list of things I worked on or spent a significant amount of time reading about from semester to semester.
		</p>
        <hr className="divider"/>
          <RI2019/>
        <hr className="divider"/>
          <RI2018/>
          <hr className="divider"/>
          <RI2017/>
          <hr className="divider"/>
      </div>
    )
  }
}


class RI2019 extends Component {
  render() {
    return (
      <div className="text-text">
		<h3> 2019 </h3>
		<h4> Fall </h4>
		<h4> Spring </h4>

		<ul>
		<li> Neural Network Pruning / LTH (due to my friend <a href="http://mitchgordon.me/about/" className="text-a">Mitch's</a> excitement about such things). </li>
		<li> Multilingual models for anything, such as multilingual BERT (but still especially for information extraction), and why they were able to do well on
			so many langauges at the same time (although, it turns out mBERT really doesn't do well on all that many languages).</li>
		<li> Bertology (probing), and the effects of pruning BERT on both probing and finetuning performance. 
			I was a bit skeptical of probing methods being used, and I wondered if pruning BERT to only the necessary parameters would change the
			story of what "BERT learned".</li>
		</ul>

      </div>
    )
  }
}

class RI2018 extends Component {
  render() {
    return (
      <div className="text-text">
		<h3> 2018 </h3>
		<h4> Fall </h4>

		<ul>
		<li> Passing my classes, and learning as much as I could from Jason Eisner's NLP class.</li>
		<li> Multilingual models for NER (my first project at JHU with my advisor) </li>
		</ul>

		<p>
		I started my PhD at JHU this semester. I also attended my first NLP conference,
		EMNLP 2018, this semester. My first project with Mark (my advisor) was to
		examine a particular multilingual model for NER and try to explain why it
		was able to do so well in a multilingual setting, when most other models
		fail to (this project ended up failing because I could never actually 
			reimplement the model in question, and after 2 semesters of trying I gave up).
		</p>

		<h4> Spring </h4>

		<ul>
		<li> Information Extraction tasks surrounding entities, such as NER and EL.  </li>
		<li> Basically anything I read that sounded cool, wherein my interest would fade a week or so later. </li>
		</ul>

		<p> At this time, I had just finished applying to graduate schools, and
		spent most of my time worrying about my future, and what I would do if
		I didn't get into any schools.</p>

		<p> ELMo had arrived by this time, but to be honest I had no notion of how much
		of an impact pretrained language models would soon make. </p>
      </div>
    )
  }
}

class RI2017 extends Component {
  render() {
    return (
      <div className="text-text">
		<h3> 2017 </h3>
		<h4> Fall </h4>

		<ul>
		<li> Understanding what NLP was.</li>
		</ul>

		<p>In Fall of 2017 I started taking a graduate course taught 
		by <a href="https://www.cs.utexas.edu/~gdurrett/" className="text-a">Greg Durrett</a> at UT. At this time I was
		working as a software developer in Austin. I knew I had an interest in AI, and possibly research, but I wasn't
		sure how to start getting involved with the field. I had a lot of conversations with professors that
		left me feeling lost or a little hopeless. I will forever be grateful to Greg for allowing me to take his
		course, and to continue working on my course project with him after the class ended, which ended up going
		all the way to a conference submission.</p>

		<p>At this point in my career, I was just trying to understand the basics of machine learning
		and how it related to NLP. I was not really fluent in the literature of the field, and I
		couldn't really read many papers without feeling a little lost.
		I bought <a href="https://www.cs.ubc.ca/~murphyk/MLbook/" className="text-a">Kevin Murphy's ML Book</a> which I believe helped me understand fundamental ML concepts at a fairly
		deep level, and was essential to my success in Greg's class.</p>
      </div>
    )
  }
}


export default Interests;
