import React, { Component } from 'react'


class UpdateList extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.item.id,
      item: '',
      category: '',
      price: '',
      quantity: '',
      unit: '',
      recipe: '',
      editView: 'hide'
    }
  }

  handleEditView = (view)=>{
    this.setState({editView: view})
  }

  handleItemUpdate = (e)=>{
    this.setState({item: e.target.value})
  }

  handleCategoryUpdate = (e)=>{
    this.setState({category: e.target.value})
  }

  handlePriceUpdate = (e)=>{
    this.setState({price: e.target.value})
  }

  handleQuantityUpdate = (e)=>{
    this.setState({quantity: e.target.value})
  }

  handleUnitUpdate = (e)=>{
    this.setState({unit: e.target.value})
  }

  handleRecipeUpdate = (e)=>{
    this.setState({recipe: e.target.value})
  }


  handleListUpdateSubmit =(e)=>{
    e.preventDefault()
    this.props.handleListUpdate(this.state)
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
      <div className="update_item">
        {this.state.editView === 'edit' ?
        <div className="update-form">
          <button className="show-edit" onClick={()=>{this.handleEditView('hide')}}>hide edit</button>
          <form onSubmit={this.handleListUpdateSubmit}>

            <label>
              Item
              <input
              type="text"
              value={this.state.item}
              onChange={this.handleItemUpdate}
              placeholder={this.props.item.item} />
            </label><br/>

            <label>
              Category
              <select
              value={this.state.category}
              onChange={this.handleCategoryUpdate}>
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
              onChange={this.handlePriceUpdate}
              placeholder={this.props.item.price} />
            </label><br/>

            <label>
              Quantity
              <input
              type="text"
              value={this.state.quantity}
              onChange={this.handleQuantityUpdate}
              placeholder={this.props.item.quantity} />
            </label><br/>

            <label>
              Unit
              <select
              value={this.state.unit}
              onChange={this.handleUnitUpdate}>
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
              onChange={this.handleRecipeUpdate}
              placeholder={this.props.item.recipe} />
            </label><br/>


            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        :
        <button className="hide-edit"         onClick={()=>{this.handleEditView('edit')}}>Edit</button>
      }
      </div>
    )
  }
}


export default UpdateList
