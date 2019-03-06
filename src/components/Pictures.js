import React, { Component, Text } from 'react';
import pics from './../assets/pics/pics.json'
import Lightbox from 'react-images'
import '../css/pictures.css'

class Pics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_lightbox: true,
            cur_pic: 0
        }

        this.close_lightbox = this.close_lightbox.bind(this);
        this.next_img = this.next_img.bind(this);
        this.prev_img = this.prev_img.bind(this);
    }

    close_lightbox() {
        this.setState({show_lightbox: false});
    }

    next_img() {
        this.setState({cur_pic: this.state.cur_pic + 1})
    }

    prev_img() {
        this.setState({cur_pic: this.state.cur_pic - 1})
    }

    render() {
        var pic_gallery = pics.pics.map((value, _) => {
            return (
                <Picture
                    key={value.src}
                    img_src={value.src}
                    desc={value.desc}
                />
            )
        });

        var lightbox_pics = pics.pics.map((value, _) => {
            return {
                src: require(`../assets/pics/${value.src}`),
                caption: value.desc
            }
        })
        
        return(
            <div className="pics-outer">
                <div className="pics-intro">
                    Just some moments from my PhD life that seemed worth sharing.
                </div>
                <Lightbox
                    currentImage={this.state.cur_pic}
                    images={lightbox_pics}
                    isOpen={this.state.show_lightbox}
                    onClickPrev={this.prev_img}
                    onClickNext={this.next_img}
                    onClose={this.close_lightbox}
                />
                {pic_gallery}
            </div>
        )
    }
}

class Picture extends Component {
    render() {
        return (
            <div className={"pics-card"}>
                <img className="pics-img" src={require("../assets/pics/" + this.props.img_src)}/>
                <p className="pics-desc">{this.props.desc}</p>
            </div>
        )
    }
}

export default Pics;