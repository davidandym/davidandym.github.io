import React, { Component } from 'react';
import face from '../assets/my-face.jpg'
import '../css/self-block.css';

class SelfBlock extends Component {
  render() {
    return (
      <div className="Self-Block">
        <div className="Intro">
          <div className="face">
            <img src={face} className="face-img"/>
          </div>
          <div className="face-text">
          Every day is taco ipsum tuesday. Say taco one more time. Give me all your tacos. How do you feel about hard shelled tacos? Flour or corn tortillas? It’s a wonderful morning for breakfast tacos. Pico de gallo, on the side please. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Ooh, with diced onions and a pinch of cilantro. Burritos are very tasty. It’s taco Tuesday Monday. Make it a double there pal. I think I’ve overdosed on tacos. Ooh, with diced onions and a pinch of cilantro.
          </div>
        </div>
        <div className="Subsequent-Text">
          <div className="useless">
            Side of rice and beans, please. It’s taco time all the time. 50 cent tacos! I’ll take 30. These tacos are lit 🔥. How do you feel about hard shelled tacos? Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp. If you were a taco, would you eat yourself? Um, Tabasco? No thanks, do you have any Cholula? It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business.
          </div>
          <div className="useless">
            Black or pinto beans? Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Can you put some peppers and onions on that? Give me all your tacos. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. These tacos are lit 🔥
          </div>
        </div>
      </div>
    )
  }
}

export default SelfBlock;