import React, { Component, Text } from 'react';
import publications from './../assets/publications.json';
import notes from './../assets/notes.json';
import "../css/publications.css"

class Publications extends Component {
    render() {
        var li = publications.publications.map((value, _) => {
            return (
                <Publication
                    title={value.title}
                    authors={value.authors}
                    anth_link={value.anthology_link}
                    pdf={value.pdf}
                    bib={value.bib}
                    conf={value.conference}
                    code={value.code}
					arxiv={value.arxiv}
					reviews={value.reviews}
					poster={value.poster}
                />
            )
        });

        var li2 = notes.notes.map((value, _) => {
            return (
                <Note
                    title={value.title}
                    pdf={value.pdf}
                    latex={value.latex}
					source={value.source}
                />
            )
        });


        return (
            <div className="pub-outer">
			{/*
			<h2>Pre-Prints</h2>
			Work that is currently pending review.
        	<hr className="divider"/>
			*/}
			<h2>My Publications</h2>
              {li}
			{/*<hr className="divider"/>
			<h2>Snippets</h2>
			Small, unpublished works aimed at intuition building, rather than
			novel research.*/}
        	<hr className="divider"/>
            </div>
        )
    }
}

class Publication extends Component {
    render() {
        return (
            <div className="pub-item">
                <div className="pub-title">
                    <a className="pub-a" href={this.props.anth_link}>
						{this.props.title}
					</a>
                </div>
                <div className="pub-author-conf">
                        {this.props.authors}, &nbsp; <em>{this.props.conf}</em>
                </div>
                <div className="pub-links">
					<PubLink link={this.props.pdf} name={"Paper"}/>
					<PubLink link={this.props.bib} name={"BibTeX"}/>
					<PubLink link={this.props.reviews} name={"Reviews"}/>
					<PubLink link={this.props.code} name={"Code"}/>
					<PubLink link={this.props.arxiv} name={"arXiv"}/>
					<PubLink link={this.props.poster} name={"Poster"}/>
                </div>
            </div>
        )
    }
}


class Note extends Component {
    render() {
        return (
            <div className="pub-item">
                <div className="pub-title">
                    <a className="pub-a" href={this.props.pdf}>
						{this.props.title}
					</a>
                </div>
                <div className="pub-links">
					<PubLink link={this.props.latex} name={"Latex"}/>
					<PubLink link={this.props.source} name={"Source"}/>
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
        	<a className="pub-a" href={this.props.link}>{this.props.name}</a>
		)
	}
}

export default Publications;
