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
                  arrayIndex={index}
                  item={item}
                  handleListUpdate={this.props.handleListUpdate}
                  handleListDelete={this.props.handleListDelete}
                  listItems={this.props.listItems}
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
                  arrayIndex={index}
                  item={item}
                  handleFridgeUpdate={this.props.handleFridgeUpdate}
                  handleFridgeDelete={this.props.handleFridgeDelete}
                  fridgeItems={this.props.fridgeItems}
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
