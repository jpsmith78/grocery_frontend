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
          <div onClick={()=>{this.handleEditView('hide')}} className="fas fa-minus-circle"></div>
          <form onSubmit={this.handleListUpdateSubmit}>

            <label>
              Item
              <br/>
              <input
              type="text"
              value={this.state.item}
              onChange={this.handleItemUpdate}
              placeholder={this.props.item.item} />
            </label>

            <label>
              Category
              <br/>
              <select
              value={this.state.category}
              onChange={this.handleCategoryUpdate}>
                <option value="">Select Category</option>
                <option value="produce">Produce</option>
                <option value="meat">Meat</option>
                <option value="seafood">Seafood</option>
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
              onChange={this.handlePriceUpdate}
              placeholder={this.props.item.price} />
            </label>

            <label>
              Quantity
              <br/>
              <input
              type="text"
              value={this.state.quantity}
              onChange={this.handleQuantityUpdate}
              placeholder={this.props.item.quantity} />
            </label>

            <label>
              Unit
              <br/>
              <select
              value={this.state.unit}
              onChange={this.handleUnitUpdate}>
                <option value="">Select Unit</option>
                <option value="each">Each</option>
                <option value="lb(s)">Lb(s)</option>
                <option value="gallon(s)">Gallon(s)</option>
                <option value="quart(s)">Quart(s)</option>
                <option value="pint(s)">Pint(s)</option>
                <option value="dozen">Dozen</option>
              </select>
            </label>

            <label>
              Recipe
              <br/>
              <input
              type="text"
              value={this.state.recipe}
              onChange={this.handleRecipeUpdate}
              placeholder={this.props.item.recipe} />
            </label>


            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        :
        <div onClick={()=>{this.handleEditView('edit')}} className="fas fa-edit"></div>
      }
      </div>
    )
  }
}


export default UpdateList
