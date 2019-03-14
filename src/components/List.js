import React, { Component } from 'react'

import ListItem from './ListItem'
import FridgeItem from './FridgeItem'



class List extends Component {
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
          </div>
        }
      </div>
    )
  }
}

export default List
