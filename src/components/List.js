import React, { Component } from 'react'

import ListItem from './ListItem'


class List extends Component {
  render(){
    return(
      <div className="list">
        <ListItem />
        {this.props.currentView === 'shoppinglist' ?
          <div>this is the shopping list view</div> :
          <div>this is the refigerator view</div>
        }
      </div>
    )
  }
}

export default List
