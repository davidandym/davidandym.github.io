import React, { Component, Text } from 'react';
import Card from '@material-ui/core/Card';
import pics from './../assets/pics/pics.json'
import '../css/pictures.css'

class Pics extends Component {

    render() {
        var pic_items = pics.pics.map((value, _) => {
            return (
                <Picture
                    key={value.src}
                    img_src={value.src}
                    desc={value.desc}
                />
            )
        });
        
        return(
            <div className="pics-outer">
                <div className="pics-intro">
                    Just some moments from my PhD life that seemed worth sharing.
                </div>
                <div className="pics-container">
                    {pic_items}
                </div>
            </div>
        )
    }
}

class Picture extends Component {
    render() {
        return (
            <Card className={"pics-card"} raised={true}>
                <img className="pics-img" src={require("../assets/pics/" + this.props.img_src)}/>
                <p className="pics-desc">{this.props.desc}</p>
            </Card>
        )
    }
}

export default Pics;