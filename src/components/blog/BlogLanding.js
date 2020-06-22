import React, { Component, Text } from 'react';
import { Link } from 'react-router-dom';
import posts from './../../assets/blog-posts.json';
import "../../css/publications.css"

class BlogLanding extends Component {
    render() {
        var li = posts.posts.map((value, _) => {
            return (
                <PostItem
                    title={value.title}
					post_ref={value.ref}
                />
            )
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

class PostItem extends Component {
    render() {
		console.log(this.props.post_ref)

        return (
            <div className="pub-item">
                <div className="pub-title">
                    <Link to={`/blog-post/${this.props.post_ref}`} className="pub-a">
						{this.props.title}
					</Link>
                </div>
            </div>
        )
    }
}

export default BlogLanding;
