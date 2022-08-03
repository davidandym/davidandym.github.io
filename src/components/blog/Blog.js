/* Stole this from
 * https://github.com/mcleonard/personal_site/blob/master/src/blog/BlogPost.js	
 */

import React, { Component } from 'react';
import Notebook from './BlogPost.js';

import "../../css/blog/blog_post_page.css"

class Blog extends Component {
  state = {
	  notebook: "{}" 
  }

  componentWillMount() {
	  let post_name = this.props.match.params['postname']
	  console.log(post_name)
	  let notebook = require(`../../assets/blog_posts/${post_name}.ipynb`)
	  console.log(notebook)
      fetch(notebook).then((response) => response.text()).then((text) => {
            this.setState({ notebook: text })
      })
  }

  render() {
	let notebook = JSON.parse(this.state.notebook)
    return (
      <div className="content">
        <Notebook source={notebook.cells} />
      </div>
	)
  }
}


export default Blog;
