import React, { Component } from 'react';

class EditTask extends Component {
    constructor (props) {
        super(props);

        // SETTING initial state
        this.state = {
            text: props.task.text,
            priority: props.task.priority
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditClick(e) {
        e.preventDefault();
        const newTask = Object.assign({}, this.props.task, {
            text: this.state.text,
            priority: this.state.priority,
            isEditing: false
        });
        this.props.updateTask(newTask);
    }

    render() {
        return (
            <div  id={this.props.id} className="p-3">
                <label htmlFor="exampleFormControlTextarea1"><strong>Description</strong></label>
                <textarea  className="form-control mb-3" onChange={this.handleChange}  name="text"  value={this.state.text} type="text" rows="3"></textarea>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="exampleFormControlTextarea1"><strong>Priority</strong></label>
                        <select className="form-control" onChange={this.handleChange} name="priority" value={this.state.priority}>
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                    </div>
                </div>
                <div className="row float-right pr-3">
                    <button type="button" onClick={this.handleEditClick}  className="btn btn-warning btn-md">SAVE</button>
                </div>
            </div>
        )
    }
}

export default EditTask;