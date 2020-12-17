import React from 'react'
import Task from './Task.js'

class TaskList extends React.Component{

    filterTasks = () => {
        //returns array that I want to print
        // condition: category !all, render filtered list. else "all"
        if(this.props.selected !== 'All'){
            return this.props.tasks.filter(task => task.category === this.props.selected)
        }else{
            return this.props.tasks
        }
    }

    render(){
        
        // condition if category is selected, render that, else 'all' 
        let taskItem = this.filterTasks().map(task => (
            <Task key={task.text} task={task} />
        ))
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                {taskItem}
            </div>
        )
    }

}
 
export default TaskList