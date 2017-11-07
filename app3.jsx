import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className="display-4">Very Simple Todo App</h1>
        <h2><small class="text-muted">Track all of the things</small></h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                Add New Todo
              </div>
              <div className="card-body">
                <label for="exampleFormControlTextarea1"><strong>I want to...</strong></label>
                <textarea className="form-control mb-3" rows="3"></textarea>
                <label for="exampleFormControlTextarea1"><strong>How much of a priority is this?</strong></label>
                <select className="form-control" placeholder="Select a Priority">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="card-footer text-muted">
                <button type="button" className="btn btn-warning  btn-block">ADD</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-header">
                View Todos
              </div>
              <div className="card-body">
                <label for="exampleFormControlTextarea1"><strong>Description</strong></label>
                <textarea className="form-control mb-3" rows="3"></textarea>
                <div className="row">
                  <div className="col-6">
                    <label for="exampleFormControlTextarea1"><strong>Priority</strong></label>
                    <select className="form-control">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
                <div className="row float-right pr-3">
                  <button type="button" className="btn btn-warning btn-md">SAVE</button>
                </div>
              </div>
              <div className="list-group">
                <ul className="list-group p-0">
                  <li className="list-group-item list-group-item-primary"><input class="form-check-input" type="checkbox" value="" />
                    Drink a beer?<button type="button" className="btn btn-outline-primary float-right icon-button"><i className="fa fa-trash" aria-hidden="true"></i></button><button type="button" className="btn btn-outline-primary float-right icon-button mr-3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button ></li>
                  <li className="list-group-item list-group-item-secondary"><input class="form-check-input" type="checkbox" value="" />
                  Drink another beer<button type="button" className="btn btn-outline-primary float-right icon-button"><i className="fa fa-trash" aria-hidden="true"></i></button><button type="button" className="btn btn-outline-primary float-right icon-button mr-3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


