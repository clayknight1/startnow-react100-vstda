import React, { Component } from 'react';
import App from './App';
import ViewCard from './viewCard';


class Welcome extends Component {
    render() {
        return (
            <div className="card-body p-0">
                <h4 className="p-2">Welcome to Very Simple Todo App!</h4>
                <p className="p-2">Get started by adding a new todo on the left.</p>
            </div>

        )
    }
}

export default Welcome;