import React, { Component } from 'react'



class FridgeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      fridge_item: '',
      fridge_category: '',
      fridge_quantity: '',
      fridge_unit: '',
    }
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
        <h2>Refrigerator Form</h2>
        <form onSubmit={this.handleFridgeSubmit}>

          <input
          type="text"
          value={this.state.fridge_item}
          onChange={this.handleFridgeItemChange}
          placeholder="new refrigerator item"/><br/>

          <input
          type="text"
          value={this.state.fridge_category} onChange={this.handleFridgeCategoryChange}
          placeholder="category"/><br/>

          <input
          type="text"
          value={this.state.fridge_quantity} onChange={this.handleFridgeQuantityChange}
          placeholder="quantity"/><br/>

          <input
          type="text"
          value={this.state.fridge_unit}
          onChange={this.handleFridgeUnitChange}
          placeholder="unit"/><br/>
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}


export default FridgeForm
