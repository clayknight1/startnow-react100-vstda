import React, { Component } from 'react';
import App from './App';
import ViewCard from './viewCard';
import EditTask from './editTask.jsx';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: []
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(e) {
        this.setState({
            edit: [...this.state.edit, parseInt(e.currentTarget.name)]
        })
    }

    render() {
        return (
            <div className="list-group p-0">
                <ul className="list-group p-0">
                    {this.props.tasks.map((task, index) =>
                        <div key={index}>
                            <li className="list-group-item list-group-item-primary">
                                {task.text}
                                <button type="button" onClick={this.props.removeTask} name={index} className="btn btn-outline-primary float-right icon-button">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                <button type="button" onClick={this.toggleEdit} name={index} className="btn btn-outline-primary float-right icon-button mr-3">
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"  name={index} ></i>
                                </button >
                            </li>
                            { this.state.edit.indexOf(index) != -1 &&  <EditTask id={index}/>}
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;