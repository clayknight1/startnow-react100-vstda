import React, { Component } from 'react';
import EditTask from './EditTask';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleDeleteClick(event) {
        event.preventDefault();
        this.props.removeTask(this.props.task.id);
    }

    handleEditClick(event) {
        event.preventDefault();
        const newTask = Object.assign({}, this.props.task, {isEditing: true})
        this.props.updateTask(newTask)
    }

    render() {
        const task = this.props.task;
        var priorityLevel = this.props.task.priority;
        if (priorityLevel == '3' ) {
            var listColor = "list-group-item-warning"
        }   else if (priorityLevel == '2') {
            var listColor = "list-group-item-danger"
        }   else {
            var listColor = "list-group-item-primary"
        }

        if (this.props.task.isEditing) {
            return <EditTask 
                task={this.props.task} 
                editTodo={this.props.editTodo}
                 updateTask={this.props.updateTask}
                 />
            }

        return (
            <li className={`list-group-item ${listColor}`}>
                {task.text}
                <button type="button" onClick={this.handleDeleteClick} className="btn btn-outline-primary float-right icon-button delete-todo">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button type="button" onClick={this.handleEditClick} className="btn btn-outline-primary float-right icon-button mr-3 edit-todo">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" ></i>
                </button >
            </li>
        )
    }
}

export default Todo;