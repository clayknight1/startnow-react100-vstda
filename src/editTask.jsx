import React, { Component } from 'react';
import App from './App';
import ViewCard from './viewCard';
import List from './list';

class EditTask extends Component {

    render() {
        return (
            <div id={this.props.id} className="p-3">
                <label htmlFor="exampleFormControlTextarea1"><strong>Description</strong></label>
                <textarea className="form-control mb-3" onChange={this.props.taskHandleChange} name="text" type="text" rows="3"></textarea>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="exampleFormControlTextarea1"><strong>Priority</strong></label>
                        <select className="form-control" onChange={this.props.taskHandleChange} name="priority">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </div>
                <div className="row float-right pr-3">
                    <button type="button" onClick={this.props.taskEdit}  className="btn btn-warning btn-md">SAVE</button>
                </div>
            </div>
        )
    }
}

export default EditTask;