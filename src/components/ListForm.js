import React, { Component } from 'react'


class ListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      category: '',
      price: '',
      quantity: '',
      unit: '',
      recipe: '',
    }
  }

  handleItemChange = (e)=>{
    this.setState({ item: e.target.value });
  }

  handleCategoryChange = (e)=>{
    this.setState({ category: e.target.value });
  }

  handlePriceChange = (e)=>{
    this.setState({ price: e.target.value })
  }

  handleQuantityChange = (e)=>{
    this.setState({ quantity: e.target.value })
  }

  handleUnitChange = (e)=>{
    this.setState({ unit: e.target.value })
  }
  handleRecipeChange = (e)=>{
    this.setState({ recipe: e.target.value })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.handleCreateListItem(this.state)
    this.clearForm()
  }

  clearForm = ()=>{
    this.setState({item: '',
     category: '',
     price: '',
     quantity: '',
     unit:'',
     recipe: '',
   })
  }


  render(){
    return(
      <div className="list-form">
        <h2>List Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.item} onChange={this.handleItemChange} placeholder="new item" /><br/>
          <input type="text" value={this.state.category} onChange={this.handleCategoryChange} placeholder="category" /><br/>
          <input type="text" value={this.state.price} onChange={this.handlePriceChange} placeholder="price" /><br/>
          <input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} placeholder="quantity" /><br/>
          <input type="text" value={this.state.unit} onChange={this.handleUnitChange} placeholder="unit" /><br/>
          <input type="text" value={this.state.recipe} onChange={this.handleRecipeChange} placeholder="recipe" /><br/>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}

export default ListForm
