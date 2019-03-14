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
    }
  }

  handleChange = (e)=>{
    this.setState({ item: e.target.value});
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.handleCreateListItem(this.state)
    this.clearForm()
  }

  clearForm = ()=>{
    this.setState({item:'', category:'', price:'', quantity:'', unit:''})
  }


  render(){
    return(
      <div className="list-form">
        <h2>List Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.item} onChange={this.handleChange} placeholder="new item" /><br/>
          <input type="text" placeholder="category" /><br/>
          <input type="text" placeholder="price" /><br/>
          <input type="text" placeholder="quantity" /><br/>
          <input type="text" placeholder="unit" /><br/>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}

export default ListForm
