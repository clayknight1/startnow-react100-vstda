import React, { Component } from 'react';
import App from './App';

class ListGroup extends Component {
    render() {
        return (
            <div className="list-group">
                <ul className="list-group p-0">
                    <li className="list-group-item list-group-item-primary"><input class="form-check-input" type="checkbox" value="" />
                        Drink a beer?<button type="button" className="btn btn-outline-primary float-right icon-button"><i className="fa fa-trash" aria-hidden="true"></i></button><button type="button" className="btn btn-outline-primary float-right icon-button mr-3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button >
                    </li>
                </ul>
            </div>
        )
    }
}



