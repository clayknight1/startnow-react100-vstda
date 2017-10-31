import React, { Component } from 'react';

class AddTodo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            descriptionValue: '',
            priorityValue: '0'
        }

        this.handleDescription = this.handleDescription.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleTaskEntry = this.handleTaskEntry.bind(this);
    }

    handleDescription(e) {
        this.setState({
            descriptionValue: e.target.value
        });
    }

    handlePriority(e) {
        this.setState({
            priorityValue: e.target.value
        });
    }

    handleTaskEntry(e) {
        e.preventDefault();
        this.props.taskEntry(this.state.descriptionValue, this.state.priorityValue);
        this.setState({
            descriptionValue: '',
            priorityValue: '0'
        })
    }


    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        Add New Todo
                    </div>
                    <div className="card-body">
                        <label htmlFor="exampleFormControlTextarea1"><strong>I want to...</strong></label>
                        <textarea
                            className="form-control mb-3"
                            rows="3"
                            name="text"
                            type="text"
                            value={this.state.descriptionValue}
                            onChange={this.handleDescription}>
                        </textarea>
                        <label htmlFor="exampleFormControlTextarea1"><strong>How much of a priority is this?</strong></label>
                        <select className="form-control" name="priority" value={this.state.priorityValue} onChange={this.handlePriority}>
                            <option value="0" disabled>Select A Priority</option>
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                    </div>
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-warning  btn-block" onClick={this.handleTaskEntry}>ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;