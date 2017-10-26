
import React, { Component } from 'react';
import App from './App';

class AddTodo extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        Add New Todo
                    </div>
                    <div className="card-body">
                        <label htmlFor="exampleFormControlTextarea1"><strong>I want to...</strong></label>
                        <textarea className="form-control mb-3" rows="3" name="text" type="text" onChange={this.props.taskChange}></textarea>
                        <label htmlFor="exampleFormControlTextarea1"><strong>How much of a priority is this?</strong></label>
                        <select className="form-control" name="priority" onChange={this.props.taskChange}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-warning  btn-block" onClick={this.props.taskEntry}>ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;