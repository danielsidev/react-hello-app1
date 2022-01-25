import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const helloWorld = () => (<div>Hello World App1!</div>)
const helloReact = () => (<div>Hello React App1!</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
            </Switch>
            {/* <br />
            <Link to='/react'>Say hello to React!</Link>
            <br />
            <Link to='/'>Say hello to the World!</Link> */}
        </Router>
    </div>
}