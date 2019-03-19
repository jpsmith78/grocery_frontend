import React, { Component } from 'react';
import UpdateFridge from './UpdateFridge'

class FridgeItem extends Component {
  render(){
    return(
      <React.Fragment>
          <tr>
            <td>{this.props.item.fridge_item}</td>
            <td>{this.props.item.fridge_category}</td>
            <td>{this.props.item.fridge_quantity}</td>
            <td>{this.props.item.fridge_unit}</td>
            <td><UpdateFridge
              arrayIndex={this.props.index}
              item={this.props.item}
              handleFridgeUpdate={this.props.handleFridgeUpdate}
              fridgeItems={this.props.fridgeItems}
            /></td>
            <td><div onClick={()=>{this.props.handleFridgeDelete(this.props.item.id, this.props.arrayIndex, this.props.fridgeItems)}} className="fas fa-trash-alt"></div></td>
          </tr>



      </React.Fragment>

    )
  }
}

export default FridgeItem
