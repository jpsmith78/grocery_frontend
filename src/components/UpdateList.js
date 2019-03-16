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
    }
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
        <form onSubmit={this.handleListUpdateSubmit}>
          <input
          type="text"
          value={this.state.item}
          onChange={this.handleItemUpdate}
          placeholder={this.props.item.item} /><br/>

          <input
          type="text"
          value={this.state.category}
          onChange={this.handleCategoryUpdate}
          placeholder={this.props.item.category} /><br/>

          <input type="text"
          value={this.state.price}
          onChange={this.handlePriceUpdate}
          placeholder={this.props.item.price} /><br/>

          <input
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantityUpdate}
          placeholder={this.props.item.quantity} /><br/>

          <input
          type="text"
          value={this.state.unit}
          onChange={this.handleUnitUpdate}
          placeholder={this.props.item.unit} /><br/>

          <input
          type="text"
          value={this.state.recipe}
          onChange={this.handleRecipeUpdate}
          placeholder={this.props.item.recipe} /><br/>

          <button type="submit" className="submit-button">Submit</button>
        </form>




      </div>
    )
  }
}


export default UpdateList
