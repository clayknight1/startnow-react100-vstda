import React, { Component } from 'react';

class EditTask extends Component {
    constructor (props) {
        super(props);

        // this.state = {
        //     descriptionValue: '',
        //     priorityValue: '0',
        //     positionValue: 0
        // }

        // this.handleDescription = this.handleDescription.bind(this);
        // this.handlePriority = this.handlePriority.bind(this);
        // this.handlePosition = this.handlePosition.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    // handleDescription(e) {
    //     this.setState({
    //         descriptionValue: e.target.value
    //     });
    // }

    // handlePriority(e) {
    //     this.setState({
    //         priorityValue: e.target.value
    //     });
    // }

    // handlePosition(e) {
    //     this.setState({
    //         positionValue: e.target.id
    //     })
    // }

    // handleEditTask(e) {
    //     e.preventDefault();
    //     this.props.editTodo(this.state.descriptionValue, this.state.priorityValue, this.state.positionValue);
    //     this.setState({
    //         descriptionValue: '',
    //         priorityValue: '0',
    //         positionValue: 0
    //     })
    // }
    handleEditClick(e) {
        e.preventDefault();
        console.log(e.target.name)
        const newTask = Object.assign({}, this.props.task, { isEditing: false})
        console.log(newTask);
        this.props.updateTask(newTask);
    }

    render() {
        return (
            <div  id={this.props.id} className="p-3">
                <label htmlFor="exampleFormControlTextarea1"><strong>Description</strong></label>
                <textarea  className="form-control mb-3" onChange={this.props.taskHandleChange}  name="text" type="text" rows="3"></textarea>
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
                    <button type="button" onClick={this.handleEditClick}  className="btn btn-warning btn-md">SAVE</button>
                </div>
            </div>
        )
    }
}

export default EditTask;