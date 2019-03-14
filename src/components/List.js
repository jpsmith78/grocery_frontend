import React, { Component } from 'react'

import ListItem from './ListItem'
import ListForm from './ListForm'

import FridgeItem from './FridgeItem'
import FridgeForm from './FridgeForm'



class List extends Component {
  handleCreateListItem = (item)=>{
    console.log(item);
  }

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
