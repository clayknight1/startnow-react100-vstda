import React, { Component } from 'react';
import Welcome from './Welcome';
import List from './List';

class ViewCard extends Component {
    render() {
        return (
            <div className="col-8">
                <div className="card">
                    <div className="card-header">
                        View Todos
                    </div>

                    {this.props.tasks.length === 0 && <Welcome />}
                    <List 
                        tasks={this.props.tasks}
                        removeTask={this.props.removeTask}
                        updateTask={this.props.updateTask}
                    />
                    

                </div>
            </div>
        )
    }
}

export default ViewCard;
