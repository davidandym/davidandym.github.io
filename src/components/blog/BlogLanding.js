import React, { Component, Text } from 'react';
import { Link } from 'react-router-dom';
import posts from './../../assets/blog-posts.json';
import "../../css/publications.css"

class BlogLanding extends Component {
    render() {
        var li = posts.posts.map((value, _) => {
			if (value.hidden == false) {
            	return (
            	    <PostItem
            	        title={value.title}
						post_ref={value.ref}
						tags={value.tags}
            	    />
            	)
			}
        });

        return (
            <div className="pub-outer">
			<h2>Blog Posts</h2>
              {li}
        	<hr className="divider"/>
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


class PostItem extends Component {
    render() {

		const tags = this.props.tags
  		const tagItems = tags.map((tag) =>
			<PubLink link={"#/blog"} name={tag}/>
  		);

        return (
            <div className="pub-item">
                <div className="pub-title">
                    <Link to={`/blog-post/${this.props.post_ref}`} className="pub-a">
						{this.props.title}
					</Link>
                </div>
                <div className="pub-links">
					tags: &nbsp; 
					{tagItems}
				</div>
                <div className="pub-links">
					Posted: &nbsp; 
					{this.props.post_date}
				</div>
            </div>
        )
    }
}

export default BlogLanding;
