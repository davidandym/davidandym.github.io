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
                    link={value.anthology_link}
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
                    <a className="pub-a" href="https://aclanthology.info/papers/D18-1126/d18-1126">{this.props.title}</a>
                </div>
                <div className="pub-author-conf">
                        {this.props.authors}, {this.props.conf}
                </div>
                <div className="pub-links">
                    <a className="pub-a" href="http://aclweb.org/anthology/D18-1126">pdf</a>
                    <a className="pub-a" href="https://aclanthology.info/papers/D18-1126/d18-1126.bib">BibTex</a>
                </div>
            </div>
        )
    }
}

export default Publications;