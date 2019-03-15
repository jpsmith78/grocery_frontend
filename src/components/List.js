import React, { Component } from 'react'

import ListItem from './ListItem'
import ListForm from './ListForm'

import FridgeItem from './FridgeItem'
import FridgeForm from './FridgeForm'



class List extends Component {

  // ===========================================
  // <<<<<<<<<<<HANDLE CREATE LIST ITEM>>>>>>>>>
  // ===========================================

  handleCreateListItem = (item)=>{
    console.log(item);
    fetch('http://localhost:8888/list', {
      body: JSON.stringify(item),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    })
    .then(createdItem => {
      return createdItem.json()
    })
    .then(jData => {
      this.updateArray(jData, this.props.listItems)
    })
    .catch(err => console.log(err))
  }

// ===========================================
// <<<<<<<<<<<<UPDATE ARRAY>>>>>>>>>>>>>>>>>>>
// ===========================================
updateArray = (item, array) => {
  this.setState( prevState => {
    prevState[array].push(item)
    return {
      [array]: prevState[array]
    }
  })
}
// ===========================================
// <<<<<<<<<<<<RENDER VIEW>>>>>>>>>>>>>>>>>>>>
// ===========================================

  render(){
    return(
      <div className="list">

        {this.props.currentView === 'shoppinglist' ?
          <div>
            {this.props.listItems.map((item, index)=>{
              return(
                <ListItem
                  key={index}
                  item={item}
                />
              )
            })}
            <ListForm
              handleCreateListItem={this.handleCreateListItem}
            />
          </div> :
          <div>
            {this.props.fridgeItems.map((item, index)=>{
              return(
                <FridgeItem
                  key={index}
                  item={item}
                />
              )
            })}
            <FridgeForm />
          </div>
        }
      </div>
    )
  }
}

export default List
