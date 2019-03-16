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
    }
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
    fridge_unit: ''})
  }


  render(){
    return(
      <div className="update_fridge">
        <form onSubmit={this.handleFridgeUpdateSubmit}>

          <input
          type="text"
          value={this.state.fridge_item}
          onChange={this.handleFridgeItemUpdate}
          placeholder={this.props.item.fridge_item}/><br/>

          <input
          type="text"
          value={this.state.fridge_category} onChange={this.handleFridgeCategoryUpdate}
          placeholder={this.props.item.fridge_category}/><br/>

          <input
          type="text"
          value={this.state.fridge_quantity} onChange={this.handleFridgeQuantityUpdate}
          placeholder={this.props.item.fridge_quantity}/><br/>

          <input
          type="text"
          value={this.state.fridge_unit}
          onChange={this.handleFridgeUnitUpdate}
          placeholder={this.props.item.fridge_unit}/><br/>

          <button type="submit" className="submit-button">Update</button>
        </form>
      </div>
    )
  }
}


export default UpdateFridge
