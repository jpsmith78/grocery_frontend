import React, { Component } from 'react';
import UpdateFridge from './UpdateFridge'

class FridgeItem extends Component {
  render(){
    return(
      <React.Fragment>

        <div className="fridge_item">
          {this.props.item.fridge_item}<br/>
          {this.props.item.fridge_category}<br/>
          {this.props.item.fridge_quantity}<br/>
          {this.props.item.fridge_unit}
        </div>

        <div className="fridge_action">
          
          <UpdateFridge
            arrayIndex={this.props.index}
            item={this.props.item}
            handleFridgeUpdate={this.props.handleFridgeUpdate}
            fridgeItems={this.props.fridgeItems}
          />
          <button className="delete_button" onClick={()=>{this.props.handleFridgeDelete(this.props.item.id, this.props.arrayIndex, this.props.fridgeItems)}}>delete</button>
        </div>

      </React.Fragment>

    )
  }
}

export default FridgeItem
