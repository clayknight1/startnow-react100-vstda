import React, { Component } from 'react';
import AddTodo from './AddTask';
import ViewCard from './viewCard';

let counter = 0;

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
    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);

  };

  addTodo(description, priority) {
    const newestTask = {
      text: description,
      priority: priority,
      id: counter++
    };
    
    this.setState({
      tasks: [...this.state.tasks, newestTask]
    })
  }

  deleteTask(id) {
    const newTasks = this.state.tasks.slice();
    const taskIndex = newTasks.findIndex(task => task.id === id);
    newTasks.splice(taskIndex, 1);
    
    this.setState({
      tasks: newTasks
    });
  }

  updateTask(newTask) {
    const newTasks = this.state.tasks.slice();
    const taskIndex = newTasks.findIndex(task => task.id === newTask.id);
    var editedTask = //new state set here 
    newTasks.splice(taskIndex, 1, newTask);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className="display-4">Very Simple Todo App</h1>
        <h2><small className="text-muted">Track all of the things</small></h2>
        <hr />
        <div className="row">
          <AddTodo taskEntry={this.addTodo} />

          <ViewCard
            tasks={this.state.tasks}
            removeTask={this.deleteTask}
            updateTask={this.updateTask}
          />
        </div>
      </div>
    )
  };
};

export default App;


