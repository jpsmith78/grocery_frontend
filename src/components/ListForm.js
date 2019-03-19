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
      formView: 'hide'
    }
  }

  handleFormView = (view)=>{
    this.setState({formView: view})
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
        {this.state.formView === 'form' ?
        <form onSubmit={this.handleSubmit}>
          <label>
            Item
            <br/>
            <input
              type="text"
              value={this.state.item}
              onChange={this.handleItemChange}
              placeholder="new item"
            />
          </label>

          <label>
            Category
            <br/>
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
          </label>

          <label>
            Price
            <br/>
            <input type="text"
              value={this.state.price}
              onChange={this.handlePriceChange}
              placeholder="price"
            />
          </label>


          <label>
            Quantity
            <br/>
            <input
              type="text"
              value={this.state.quantity} onChange={this.handleQuantityChange}
              placeholder="quantity"
            />
          </label>


          <label>
            Unit
            <br/>
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
          </label>


          <label>
            Recipe
            <br/>
            <input
              type="text"
              value={this.state.recipe}
              onChange={this.handleRecipeChange}
              placeholder="recipe"
            />
          </label>

          <button type="submit" className="submit-button">Add List Item</button>
          <button onClick={()=>{this.handleFormView('hide')}}>Hide Form</button>
        </form> : <button className="show-form"         onClick={()=>{this.handleFormView('form')}}>Show Form</button>}
      </div>
    )
  }
}

export default ListForm
