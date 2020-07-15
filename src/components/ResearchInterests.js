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
		<h2> 2019 </h2>

		<h3> Fall </h3>

		<p>
		<strong> TAing for machine learning! </strong> It's not really a research
		interest, but it took up a lot of research time, haha. Still this was
		an incredibly enriching experience, in which I learned a lot about writing
		homeworks, tests, and preparing lectures. It also taught me how much
		I love helping people understand things, and helped me to appreciate
		some of the fantastic professors I had during my undergraduate career. 
		Finally, it really
		helped me to solidify my understanding of machine learning fundamentals.
		</p>

		<p>
		<strong> Continuing my multilingual project. </strong> I continued being
		interested in multilingual training as a sort of multitask learning,
		but of the same task, and analyzing these models compared to 
		monolingual models to see if we could find a way to explain their 
		performance differences.
		</p>

		<p>
		<strong>Neural tangent kernels, double descent </strong> and other 
		fascinating findings that were challenging our notion of 
		overparameterization and overfitting with neural networks. I didn't pick
		up any projects regarding this, but I remained fascinated by the ongoing
		research around this subject.
		</p>

		<h3> Spring </h3>

		<p>
		<strong> Neural Network Pruning and <a href="https://arxiv.org/abs/1803.03635" className="text-a">LTH</a>, </strong> 
		mainly due to my friend <a href="http://mitchgordon.me/about/" className="text-a">Mitch's</a> excitement about it,
		and the discussions we had around it.
		I became very interested in the sparsity of neural networks, and how that impacted my understanding of deep learning.
		</p>

		<p>
		<strong> Multilingual models, </strong> such as multilingual BERT. I found
		it very interesting that sharing all parameters across all languages seemed
		to work so well, and found the cross-lingual abilities of such models
		fascinating. I spent some time working on a project which examined multilingual
		models on a smaller scale, to try to tease apart patterns of where this paradigm worked
		and didn't work well.
		</p>

		<p>
		<strong> Bertology (probing), </strong> and the effects of pruning BERT 
		on both probing and finetuning performance. 
		I was a bit skeptical of the probing methods being used (usually just MLPs)
		and I wondered if pruning BERT to only the necessary parameters would change the
		story of what "BERT learned" to what BERT actually seemed to need.
		</p>

		<p>
		<strong> Symbolic AI, and it's relevance today. </strong> I think this
		came from my brief interest in grounding language models, which led to me 
		reading The Symbol Grounding Problem, which then led me to realize that
		I had a very limited understanding of classic AI research and philosophy,
		so I spent some time reading and thinking about that.
		</p>

      </div>
    )
  }
}

class RI2018 extends Component {
  render() {
    return (
      <div className="text-text">
		<h2> 2018 </h2>
		<h3> Fall </h3>

		<p>
		<strong> Starting my PhD! </strong>
		I started my PhD at JHU this semester. I also attended my first NLP conference,
		EMNLP 2018, this semester. My research interests were still bouncing around
		a lot, and I would become attached to anything that sounded cool for a couple 
		weeks at a time, before dropping it for something else. Obviously, one thing that stuck
		on my radar around this time was BERT and related analysis papers,
		since it was becoming so predominant in the field.
		</p>

		<p>
		<strong> Multilingual models, and their behaviors. </strong>
		My first project with Mark (my advisor) was to
		examine a particular multilingual model for NER and try to explain why it
		was able to do so well in a multilingual setting, when most other models
		fail to (this project ended up failing because I could never actually 
			reimplement the model in question, and after 2 semesters of trying
		we shifted to something else).
		</p>

		<h3> Spring </h3>

		<p> 
		<strong> Information Extraction tasks surrounding entities</strong>, such as NER and EL.
		Predominantly, due to the fact that my project with Greg involved Entity Linking and so
		I felt it was an area that I had a decent understanding of, so I was able to read
		relevant papers more thoroughly.
		</p>

		<p>
		<strong> Basically anything I read that sounded cool</strong>, wherein my interest would fade a week or so later. 
		I really had no idea what I was really interested in, and would read papers
		(like ELMo) without really understanding the overall impact it would eventually
		have on the field.
		</p>

		<p> At this time, I had just finished applying to graduate schools, and
		spent most of my time worrying about my future, and what I would do if
		I didn't get into any schools.</p>

      </div>
    )
  }
}

class RI2017 extends Component {
  render() {
    return (
      <div className="text-text">
		<h2> 2017 </h2>
		<h3> Fall </h3>

		<p> <strong> Understanding what NLP was:</strong> In Fall of 2017 I started taking a graduate course taught 
		by <a href="https://www.cs.utexas.edu/~gdurrett/" className="text-a">Greg Durrett</a> at UT. At this time I was
		working as a software developer in Austin. I knew I had an interest in AI, and possibly research, but I wasn't
		sure how to start getting involved with the field. I had a lot of conversations with professors that
		left me feeling lost or a little hopeless, although two notable exceptions were 
		professors <a href="https://www.cs.utexas.edu/~ans/" className="text-a">Alison Norman</a> and <a href="https://www.cs.utexas.edu/users/porter/" className="text-a">Bruce Porter</a> who 
		instead gave me a lot of hope and encouragement. 
		I will forever be grateful to Greg for allowing me to take his
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
