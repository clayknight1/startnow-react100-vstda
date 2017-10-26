import React, { Component } from 'react';
import App from './App';

class ViewCard extends Component {
    render() {
        return(
            <div className="col-8">
            <div className="card">
                <div className="card-header">
                    View Todos
                      </div>
                <div className="card-body">
                    <h4>Welcome to Very Simple Todo App!</h4>
                    <p>Get started by adding a new todo on the left.</p>
                {/* Add Componenets here */}
        
                </div>
            </div>
        </div>
        )
    }
}

export default ViewCArd;
