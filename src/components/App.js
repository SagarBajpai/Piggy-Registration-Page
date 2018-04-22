import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js';
import PageNotFound from './PageNotFound.js';

class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/pageNotFound' component={PageNotFound}/>
                <Route exact path='/*' component={PageNotFound}/>
            </Switch>
        );
    }
}

export default App;