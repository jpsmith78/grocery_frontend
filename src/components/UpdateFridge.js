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
          <div onClick={()=>{this.handleEditView('hide')}} className="fas fa-minus-circle"></div>
          <form onSubmit={this.handleFridgeUpdateSubmit}>

            <label>
              Item
              <br/>
              <input
              type="text"
              value={this.state.fridge_item}
              onChange={this.handleFridgeItemUpdate}
              placeholder={this.props.item.fridge_item}/>
            </label>

            <label>
              Category
              <br/>
              <select
              value={this.state.fridge_category}
              onChange={this.handleFridgeCategoryUpdate}>
                <option value="">Select Category</option>
                <option value="produce">Produce</option>
                <option value="meat">Meat</option>
                <option value="seafood">Seafood</option>s
                <option value="deli">Deli</option>
                <option value="bakery">Bakery</option>
                <option value="grocery">Grocery</option>
                <option value="dairy">Dairy</option>
                <option value="frozen">Frozen</option>
              </select>
            </label>

            <label>
              Quantity
              <br/>
              <input
              type="text"
              value={this.state.fridge_quantity} onChange={this.handleFridgeQuantityUpdate}
              placeholder={this.props.item.fridge_quantity}/><br/>
            </label>

            <label>
              Unit
              <br/>
              <select
              value={this.state.fridge_unit}
              onChange={this.handleFridgeUnitUpdate}>
                <option value="">Select Unit</option>
                <option value="each">Each</option>
                <option value="lb(s)">Lb(s)</option>
                <option value="gallon(s)">Gallon(s)</option>
                <option value="quart(s)">Quart(s)</option>
                <option value="pint(s)">Pint(s)</option>
                <option value="dozen">Dozen</option>
              </select>
            </label>

            <button type="submit" className="submit-button">Update</button>
          </form>
        </div>
         :
         <div onClick={()=>{this.handleEditView('edit')}} className="fas fa-edit"></div>
       }

      </div>
    )
  }
}


export default UpdateFridge
