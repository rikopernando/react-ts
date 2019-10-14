import React, { Component } from 'react'
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm'
import { TaskList } from './components/TaskList'

interface State {
  newTask: Task
  tasks: Task[]
}

class App extends Component<{}, State> {

  state = {
    newTask: {
      id: 1,
      name: ''
    },
    tasks: []
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ''
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }))
  }

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previouseState => ({
      tasks: [
        ...previouseState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }))
  }

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TaskList
          tasks={this.state.tasks}
          onDelete={this.deleteTask}
        />
      </div>
    );
  }
}


export default App
