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

          <div className="list-div">
            <ListForm
            handleCreateListItem={this.props.handleCreateListItem}
            />
            <table>
              <tbody>
                <tr>
                  <th>Cross Off Item</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Recipe</th>
                  <th>In Refrigerator
                    <table>
                      <tbody>
                        <tr>
                          <th>Item</th>
                          <th>Category</th>
                          <th>Quantity</th>
                          <th>Unit</th>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  <th>Left to Buy</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
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
              </tbody>
            </table>
          </div> :
          <div className="list-div">
            <FridgeForm
              handleCreateFridgeItem={this.props.handleCreateFridgeItem}
            />
            <table>
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

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
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }
}

export default List
