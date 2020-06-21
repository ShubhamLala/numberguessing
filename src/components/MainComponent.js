import React from 'react';
import Start from './StartComponent';
import Game from './GameComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

function Main(){
    return(
        <div className="text">
        <Switch>
            <Route path="/start" component={Start}/>
            <Route path="/game" component={Game} />
            <Redirect to="/start" />
        </Switch>
        </div>
    );
}

export default Main;