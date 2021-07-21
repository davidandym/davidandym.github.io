/* Stole this from
 * https://github.com/mcleonard/personal_site/blob/master/src/blog/Notebook.js
 * after reading
 * https://medium.com/@MatDrinksTea/rendering-markdown-and-latex-in-react-dec355e74119
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { foundation } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

import '../../css/blog/blog_post_notebook.css';

function parse_outputs(outputs) {
    if (outputs.data) {
        return (
        <div className='Notebook-output'>
            {(outputs.data["text/plain"] && 
                <pre><code>{outputs.data["text/plain"].join("")}</code></pre>
            )}
            {(outputs.data["image/png"] &&
                <img src={"data:image/png;base64," + outputs.data["image/png"]} alt="" />
            )}
        </div>
        )
    } else if (outputs.name) {
        return (
        <div className="Notebook-output">
            <pre><code>{outputs.text.join("")}</code></pre>
        </div>
        )
    }
}

function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin,
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
            <ReactMarkdown {...newProps} />
        </MathJax.Provider>
      );
}

function Image(props) {
  return <img {...props} style={{maxWidth: '90%'}} />
}

function parse_cell(cell) {
    let language = "text"
   
	if ( cell.source.length == 0 ) {
		return
	}
    if (cell.metadata.language) {
        language = cell.metadata.language
    }
    switch (cell.cell_type) {
        case "markdown":
        
              return (
                <MarkdownRender source={cell.source.join("")} renderers={{image: Image}}/>
              );
        case "code":
            return (
                <div className="Notebook-code">
                <SyntaxHighlighter language={language} style={prism}>
                    {cell.source.join("")}
                </SyntaxHighlighter>
				
                {cell.outputs.map(parse_outputs)}
                </div>
            );
        default:
            return <p>Not handled yet!</p>
    }
}

class Notebook extends Component {

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
        let cells = this.props.source
        let content = cells.map(parse_cell)
        return (
            <div className="Notebook">
                { content }
            </div>
        ) 
    }
}

Notebook.defaultProps = { source: [] };

export default Notebook
