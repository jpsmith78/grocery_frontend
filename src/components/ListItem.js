import React, { Component } from 'react';
import UpdateList from './UpdateList'

class ListItem extends Component {
  render(){
    return (
      <React.Fragment>

        <tr>
          <td>{this.props.item.item}</td>
          <td>{this.props.item.category}</td>
          <td>{this.props.item.price}</td>
          <td>{this.props.item.quantity}</td>
          <td>{this.props.item.unit}</td>
          <td>{this.props.item.recipe}</td>
          <td>{this.props.item.have_at_home.length > 0 ?
            this.props.item.have_at_home.map((fridge_item, index)=>{
              return(
                <table key={index}>
                  <tbody>
                    <tr>
                      <td>{fridge_item.fridge_item}</td>
                      <td>{fridge_item.fridge_category}</td>
                      <td>{fridge_item.fridge_quantity}</td>
                      <td>{fridge_item.fridge_unit}</td>
                    </tr>
                  </tbody>
                </table>
              )
            }) : <table>
              <tbody>
                <tr>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          }
          </td>
            { this.props.item.have_at_home.length > 0 ? this.props.item.have_at_home.map((fridge_item, index)=>{
                return(
                    <td key={index}>
                    {this.props.item.quantity -fridge_item.fridge_quantity}
                    </td>
                )
              }): <td>{this.props.item.quantity}</td>
            }
          <td><UpdateList
            arrayIndex={this.props.index}
            item={this.props.item}
            handleListUpdate={this.props.handleListUpdate}
            listItems={this.props.listItems}
          /></td>
          <td><button className="delete_button" onClick={()=>{this.props.handleListDelete(this.props.item.id, this.props.arrayIndex, this.props.listItems)}}>delete</button></td>

        </tr>

      </React.Fragment>
    )
  }
}

export default ListItem
