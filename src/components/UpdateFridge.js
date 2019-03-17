import React, { Component } from 'react'


class UpdateFridge extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.item.id,
      fridge_item: '',
      fridge_category: '',
      fridge_quantity: '',
      fridge_unit: '',
      editView: 'hide'
    }
  }

  handleEditView = (view)=>{
    this.setState({editView: view})
  }


  handleFridgeItemUpdate = (e)=>{
    this.setState({ fridge_item: e.target.value})
  }

  handleFridgeCategoryUpdate = (e)=>{
    this.setState({ fridge_category: e.target.value})
  }

  handleFridgeQuantityUpdate = (e)=>{
    this.setState({ fridge_quantity: e.target.value})
  }

  handleFridgeUnitUpdate = (e)=>{
    this.setState({ fridge_unit: e.target.value})
  }

  handleFridgeUpdateSubmit =(e)=>{
    e.preventDefault()
    this.props.handleFridgeUpdate(this.state)
    this.clearFridgeForm()
  }

  clearFridgeForm = ()=>{
    this.setState({fridge_item: '',
    fridge_category: '',
    fridge_quantity: '',
    fridge_unit: '',})
  }


  render(){
    return(
      <div className="update_fridge">


        {this.state.editView === 'edit' ?
        <div className="update-form">
          <button onClick={()=>{this.handleEditView('hide')}}>hide edit</button>
          <form onSubmit={this.handleFridgeUpdateSubmit}>

            <label>
              Item
              <input
              type="text"
              value={this.state.fridge_item}
              onChange={this.handleFridgeItemUpdate}
              placeholder={this.props.item.fridge_item}/>
            </label><br/>

            <label>
              Category
              <select
              value={this.state.fridge_category}
              onChange={this.handleFridgeCategoryUpdate}>
                <option value="">Select Category</option>
                <option value="produce">Produce</option>
                <option value="meat/seafood">Meat/Seafood</option>
                <option value="deli">Deli</option>
                <option value="bakery">Bakery</option>
                <option value="grocery">Grocery</option>
                <option value="dairy">Dairy</option>
                <option value="frozen">Frozen</option>
              </select>
            </label><br/>

            <label>
              Quantity
              <input
              type="text"
              value={this.state.fridge_quantity} onChange={this.handleFridgeQuantityUpdate}
              placeholder={this.props.item.fridge_quantity}/><br/>
            </label>

            <label>
              Unit
              <select
              value={this.state.fridge_unit}
              onChange={this.handleFridgeUnitUpdate}>
                <option value="">Select Unit</option>
                <option value="each">Each</option>
                <option value="pound">Pound</option>
                <option value="each">Gallon</option>
                <option value="quart">Quart</option>
                <option value="each">Pint</option>
                <option value="dozen">Dozen</option>
              </select>
            </label><br/>

            <button type="submit" className="submit-button">Update</button>
          </form>
        </div>
         :
         <button onClick={()=>{this.handleEditView('edit')}}>Edit</button>
       }

      </div>
    )
  }
}


export default UpdateFridge
