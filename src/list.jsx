import React, { Component } from 'react';
import Todo from './Todo'

class List extends Component {
    render() {
        return (
            <div className="list-group p-0">
                <ul className="list-group p-0">
                    {
                        this.props.tasks.map((task) =>
                            <Todo
                                task={task}
                                removeTask={this.props.removeTask}
                                updateTask={this.props.updateTask}
                                key={task.id}
                            />)
                    }
                </ul>
            </div>
        )
    }
}

export default List;