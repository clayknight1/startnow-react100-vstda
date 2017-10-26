import React, { Component } from 'react';
import App from './App';
import Welcome from './welcome';
import EditTask from './editTask.jsx';
import List from './list';

class ViewCard extends Component {
    render() {
        return (
            <div className="col-8">
                <div className="card">
                    <div className="card-header">
                        View Todos
                    </div>

                    <Welcome />
                    <List {...this.props}/>
                    

                </div>
            </div>
        )
    }
}

export default ViewCard;
