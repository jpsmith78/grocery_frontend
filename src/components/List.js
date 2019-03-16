import React, { Component } from 'react'

import ListItem from './ListItem'
import ListForm from './ListForm'

import FridgeItem from './FridgeItem'
import FridgeForm from './FridgeForm'



class List extends Component {



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
            handleCreateListItem={this.props.handleCreateListItem}
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
            <FridgeForm
              handleCreateFridgeItem={this.props.handleCreateFridgeItem}
            />
          </div>
        }
      </div>
    )
  }
}

export default List
