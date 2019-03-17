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
        <h2>New List Item</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item
            <input
            type="text"
            value={this.state.item}
            onChange={this.handleItemChange}
            placeholder="new item" />
          </label><br/>

          <label>
            Category
            <select
            value={this.state.category}
            onChange={this.handleCategoryChange}>
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
            Price
            <input type="text"
            value={this.state.price}
            onChange={this.handlePriceChange}
            placeholder="price" />
          </label><br/>


          <label>
            Quantity
            <input
            type="text"
            value={this.state.quantity} onChange={this.handleQuantityChange}
            placeholder="quantity" />
          </label><br/>


          <label>
            Unit
            <select
            value={this.state.unit}
            onChange={this.handleUnitChange}>
              <option value="">Select Unit</option>
              <option value="each">Each</option>
              <option value="pound">Pound</option>
              <option value="each">Gallon</option>
              <option value="quart">Quart</option>
              <option value="each">Pint</option>
              <option value="dozen">Dozen</option>
            </select>
          </label><br/>


          <label>
            Recipe
            <input
            type="text"
            value={this.state.recipe}
            onChange={this.handleRecipeChange}
            placeholder="recipe" />
          </label><br/>


          <button type="submit" className="submit-button">Create Item</button>
        </form>
      </div>
    )
  }
}

export default ListForm
