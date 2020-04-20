import React, { Component, Text } from 'react';
import publications from './../assets/publications.json';
import "../css/publications.css"

class Publications extends Component {
    render() {
        var li = publications.publications.map((value, _) => {
            return (
                <Publication
                    title={value.title}
                    local_ref={value.local_ref}
                    authors={value.authors}
                    anth_link={value.anthology_link}
                    paper_link={value.paper_link}
                    bib_link={value.bib_link}
                    conf={value.conference}
                />
            )
        });

        return (
            <div className="pub-outer">
              {li}
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
                        {this.props.authors}, {this.props.conf}
                </div>
                <div className="pub-links">
                    <a className="pub-a" href={"/papers/pdfs/" + this.props.local_ref + ".pdf"}>PDF</a>
                    <a className="pub-a" href={"/papers/bibs/" +  this.props.local_ref + ".txt"}>BibTex</a>
                </div>
            </div>
        )
    }
}

export default Publications;
