import React, { Component, Text } from 'react';
import pics from './../assets/pics/pics.json'
import Lightbox from 'react-images'
import '../css/pictures.css'

class Pics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_lightbox: false,
            cur_pic: 0
        }

        this.close_lightbox = this.close_lightbox.bind(this);
        this.open_lightbox = this.open_lightbox.bind(this);
        this.next_img = this.next_img.bind(this);
        this.prev_img = this.prev_img.bind(this);
    }

    open_lightbox(index, event) {
        event.preventDefault();
        this.setState({
            show_lightbox: true,
            cur_pic: index
        })
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
        var pic_gallery = pics.pics.map((value, index) => {
            return (
                <a  className="pics-a"
                    href={value.src}
                    key={index}
                    onClick={(e) => this.open_lightbox(index,e)}>
				<img className="pics-img" src={value.thumbnail}/>
                </a>
            )
        });

        var lightbox_pics = pics.pics.map((value, _) => {
            return {
                src: value.src,
                caption: value.desc
            }
        })
        
        return(
            <div className="pics-outer">
                <div className="pics-intro">
                    Just some moments from my PhD life that seemed worth sharing.
                </div>
          		<hr className="divider"/>
                <Lightbox
                    currentImage={this.state.cur_pic}
                    images={lightbox_pics}
                    isOpen={this.state.show_lightbox}
                    onClickPrev={this.prev_img}
                    onClickNext={this.next_img}
                    onClose={this.close_lightbox}
                    backdropClosesModal={true}
                    preloadNextImage={true}
                />
				<div className="pics-gallery">
                {pic_gallery}
				</div>
            </div>
        )
    }
}

export default Pics;
