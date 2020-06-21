import React from 'react';
import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";


function Start(){
    return(
        <div>
            <Animated animationIn="bounceInDown" animationOut="bounceOutUp" animationInDuration="2000" isVisible={true}>
                <div>
                    <h1 className="text">Guess the Number</h1>
                </div>
            </Animated>
            <div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration="2000" isVisible={true}>
                <div className="instruction">
                <h3 className="text">Instructions</h3>
                    <p>You are supposed to guess the number that's stored in each level.</p>
                    <p>If the difference is 0 ‘Correct!’ in <span class="background-green">Green</span> will be shown.</p>
                    <p>If the difference is very less ‘Hot!!’ in <span class="background-red">Red</span> will be shown</p>
                    <p>If the difference is less ‘Warm’ in <span class="background-yellow">Yellow</span> will be shown</p>
                    <p>If the difference is greater ‘Cold’ in <span class="background-blue">Blue</span> will be shown</p>
                    <p>Press <span class="background-orange">Play</span> to start the game.</p>
                </div>
            </Animated>
            </div>
            <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration="2000" isVisible={true}>
                <Link to="/game"><button className="play-button">Play</button></Link>
            </Animated>
        </div>
    );
}

export default Start;