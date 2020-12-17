import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryFilters from './CategoryFilters.js'
import TaskList from './TaskList.js'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ], 
    selectedCat: 'All'
  }

  selectCat = (cat) => {
    console.log(cat)
    this.setState({
      selectedCat: cat
    })
    // change state of selectedCat
  }

  // componentDidMount(){
   
  // }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div>
          <CategoryFilters filter={this.selectCat} categories={CATEGORIES} /> 
          <TaskList filter={this.selectCat} selected={this.state.selectedCat} tasks={this.state.tasks} /> 
        </div>
      </div>
    );
  }
}

export default App;
