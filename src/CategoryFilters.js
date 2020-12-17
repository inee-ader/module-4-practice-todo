import React from 'react'
import TaskList from './TaskList.js'

class CategoryFilters extends React.Component{

    handleClick = (e) => {
        let cat = e.target.id
        this.props.filter(cat)
    }

    render(){
        
        let buttonCat = this.props.categories.map(category => (
            <button onClick={this.handleClick} id={category}>{category}</button>
        ))
        return(
        
            <div className="categories">
                <h5>Categories</h5>
                {buttonCat}
            </div>
        
        )
    }

}

export default CategoryFilters