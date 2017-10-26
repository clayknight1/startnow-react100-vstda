import React, { Component } from 'react';
import AddTodo from './addTodo';
import ViewCard from './viewCard';
import EditTask from './editTask.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {
        text: '',
        priority: 1,
        position: 0
      },
      updateTask: {
        text: '',
        priority: 1,
        position: 0
      },
      tasks: [],
      hideEditor: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.updateHandleChange = this.updateHandleChange.bind(this);
    this.editTask = this.editTask.bind(this);

  };
  handleChange(event) {
    let newObj = Object.assign({}, this.state.newTask);
    newObj[event.target.name] = event.target.value;
    this.setState({
      newTask: newObj,
    });
  };
  handleClick(event) {
    event.preventDefault();
    let newestTask = this.state.newTask;
    let taskLength = this.state.tasks.length;
    newestTask.position = taskLength;
    this.setState({
      tasks: [...this.state.tasks, newestTask],
      newTask: {
        text: '',
        priority: 1,
        position: taskLength + 1
      }
    })
  }
  deleteTask(e) {
    let name = parseInt(e.currentTarget.name);
    let newTasks = this.state.tasks;
    newTasks.splice(name, 1);
    
    this.setState({
      tasks: newTasks
    })
  }

  updateHandleChange(event) {
    let newUpdate = Object.assign({}, this.state.updateTask);
    newUpdate[event.target.name] = event.target.value;
    this.setState({
      updateTask: newUpdate
    });
    
  }
  editTask(event) {
    event.preventDefault();
    let name = parseInt(event.currentTarget.name);
    let position = this.state.tasks.position;
    let newTasks = this.state.tasks;
    newTasks.splice(name, 1, this.state.updateTask)
    this.setState({
      tasks: newTasks
    })
  }

  toggleEditor() {
    this.setState({
      hideEditor: !this.state.hideEditor
    })

  }


  render() {
    return (
      <div className='container'>
        <h1 className="display-4">Very Simple Todo App</h1>
        <h2><small className="text-muted">Track all of the things</small></h2>
        <hr />
        <div className="row">
          <AddTodo
            taskChange={this.handleChange}
            taskEntry={this.handleClick}
          />
          <ViewCard tasks={this.state.tasks}
            removeTask={this.deleteTask}
            toggleEdit={this.toggleEditor}
            hideEditor={this.state.hideEditor}
            taskUpdate={this.state.updateTask}
            taskEdit={this.editTask}
            taskHandleChange={this.updateHandleChange}
          />
        </div>
      </div>
    )
  };
};

export default App;


