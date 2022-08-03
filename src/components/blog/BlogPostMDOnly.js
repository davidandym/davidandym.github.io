/* Stole this from
 * https://github.com/mcleonard/personal_site/blob/master/src/blog/Notebook.js
 * after reading
 * https://medium.com/@MatDrinksTea/rendering-markdown-and-latex-in-react-dec355e74119
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import rehypeRaw from 'rehype-raw';
import rehypeMathJax from 'rehype-mathjax';
import RemarkMathPlugin from 'remark-math';

import '../../css/blog/blog_post_notebook.css';

function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin
        ],
        renderers: {
          ...props.renderers,
          math: (props) => 
            <MathJax.Node formula={props.value} />,
          inlineMath: (props) =>
            <MathJax.Node inline formula={props.value} />
        }
      };
      return (
        <MathJax.Provider input="tex">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} {...newProps} />
        </MathJax.Provider>
      );
}


class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.node = React.createRef();
    }

	// Math expressions fail to render when the DOM updates, so force rendering on updates
    // Shoutout to this blog post for the help
    // https://engineering.classpro.in/render-latex-in-react-using-mathjax-f9742504678
    renderMath() {
        if (window.MathJax) {
            window.MathJax.Hub.Queue([
                "Typeset",
                window.MathJax.Hub,
                this.node.current
            ]);
        }
    }

    componentDidMount() {
        this.renderMath()
    }
    componentDidUpdate() {
        this.renderMath()
    }

    render () {
        let content = this.props.source

        return (
            <div className="Notebook">
				<MarkdownRender children={content}/>
            </div>
        ) 
    }
}

BlogPost.defaultProps = { source: "" };

export default BlogPost
