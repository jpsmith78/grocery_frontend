import React, { Component } from 'react'



class FridgeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      fridge_item: '',
      fridge_category: '',
      fridge_quantity: '',
      fridge_unit: '',
      formView: 'hide'
    }
  }

  handleFormView = (view)=>{
    this.setState({formView: view})
  }

  handleFridgeItemChange = (e)=>{
    this.setState({ fridge_item: e.target.value})
  }

  handleFridgeCategoryChange = (e)=>{
    this.setState({ fridge_category: e.target.value})
  }

  handleFridgeQuantityChange = (e)=>{
    this.setState({ fridge_quantity: e.target.value})
  }

  handleFridgeUnitChange = (e)=>{
    this.setState({ fridge_unit: e.target.value})
  }

  handleFridgeSubmit = (e)=>{
    e.preventDefault()
    this.props.handleCreateFridgeItem(this.state)
    this.clearFridgeForm()
  }

  clearFridgeForm = ()=>{
    this.setState({fridge_item: '',
    fridge_category: '',
    fridge_quantity: '',
    fridge_unit: ''})
  }

  render(){
    return(
      <div className="fridge-form">
        <h2>New Refrigerator Item</h2>
        {this.state.formView === 'form' ?
        <form onSubmit={this.handleFridgeSubmit}>

          <label>
            Item
            <br/>
            <input
            type="text"
            value={this.state.fridge_item}
            onChange={this.handleFridgeItemChange}
            placeholder="new refrigerator item"/>
          </label>

          <label>
            Category
            <br/>
            <select
            value={this.state.fridge_category}
            onChange={this.handleFridgeCategoryChange}>
              <option value="">Select Category</option>
              <option value="produce">Produce</option>
              <option value="meat/seafood">Meat/Seafood</option>
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
            value={this.state.fridge_quantity} onChange={this.handleFridgeQuantityChange}
            placeholder="quantity"/>
          </label>

          <label>
            Unit
            <br/>
            <select
            value={this.state.fridge_unit}
            onChange={this.handleFridgeUnitChange}>
              <option value="">Select Unit</option>
              <option value="each">Each</option>
              <option value="pound">Pound</option>
              <option value="gallon">Gallon</option>
              <option value="quart">Quart</option>
              <option value="pint">Pint</option>
              <option value="dozen">Dozen</option>
            </select>
          </label>

          <button type="submit" className="submit-button">Add Fridge Item</button>
          <button onClick={()=>{this.handleFormView('hide')}}>Hide Form</button>
        </form> : <button className="show-form" onClick={()=>{this.handleFormView('form')}}>Show Form</button> }
      </div>
    )
  }
}


export default FridgeForm
