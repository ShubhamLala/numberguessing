import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";


function Game(){

    const [level,setLevel] = useState(1);
    const [random,setRandom] = useState(Math.floor(Math.random() * level * 100 + 1));
    const [inputval,setInputVal] = useState(null);
    const [visible,setVisibility] = useState(false);
    const [formv,setFormV] = useState(true);

    function Check(event){
        setVisibility(true);
        event.preventDefault();
    }

    function nextLevel(){
        setLevel(level + 1);
        setInputVal(null);
        setVisibility(false);
        setFormV(true);
        setRandom(Math.floor(Math.random() * level * 100 + 1));
    }

    function RenderAnswer(){
        const diff = Math.abs(inputval - random);
        if(!inputval || visible === false){
            return(
                <div></div>
            );
        }
        if(diff>=1 && diff<=4){
            return(
                <p className="background-red">Hot!!</p>
            );
        }
        else if(diff>=5 && diff<=15){
            return(
                <p className="background-yellow">Warm</p>
            );
        }
        else if(diff>=16){
            return(
                <p className="background-blue">Cold</p>
            );
        }
        else if(diff === 0){
            setFormV(false);
            return(
                <div>
                <p className="background-green">Correct!</p>
                <h3 style={{textDecoration: "none"}}>You Guessed it right!!!</h3>
                <button className="submit-button" onClick={nextLevel}>Next Level</button>
                </div>
            );
        }
    }

    return(
        <div>
            <Animated animationIn="bounceInDown" animationOut="bounceOutUp" animationInDuration="2000" isVisible={true}>
                <h1 className="text">Guess the Number</h1>
            </Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration="2000" isVisible={true}>
            <div>
                <h1>Level {level}</h1>
                <p style={{fontSize: "1.2em"}}>Enter a number between 1 and {level}00</p>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration="2000" isVisible={true}>
                    <RenderAnswer />
                </Animated>
                {formv ? <form onSubmit={Check} autoComplete="off">
                    <input type="text" name="num" id="num" placeholder="Your Number?" value={inputval} onChange={(e) => setInputVal(e.target.value) || setVisibility(false)}></input><br />
                    <button type="submit" className="submit-button">Check</button>
                    </form> : <div></div>
                }
                    
                <Link to="/start"><button type="submit" className="exit-button">Exit Game</button></Link>
            </div>
            </Animated>
        </div>
    );
}

export default Game;