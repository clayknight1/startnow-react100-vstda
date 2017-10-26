import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className="display-4">Very Simple Todo App</h1>
                <h2><small class="text-muted">Track all of the things</small></h2>
                <hr />
                {/* Componenets go here */}
            </div>
        )
    }
}

class AddCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">
                            Add New Todo
                        </div>
                        <div className="card-body">
                            {/* Left side components go here */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Description extends Component {
    render() {
        return (
            <div>
                <label for="exampleFormControlTextarea1"><strong>I want to...</strong></label>
                <textarea className="form-control mb-3" rows="3"></textarea>
            </div>
        )
    }
}

class Priority extends Component {
    render() {
        return (
            <div>
                <label for="exampleFormControlTextarea1"><strong>How much of a priority is this?</strong></label>
                <select className="form-control" placeholder="Select a Priority">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
        )
    }
}

class AddButton extends Component {
    render() {
        return(
            
        )
    }
}