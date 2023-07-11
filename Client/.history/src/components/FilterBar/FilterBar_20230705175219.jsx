
import {connect} from 'react-redux'
import { order, orderReverse, filter } from '../../Redux/actions'
import { useState } from 'react'

function FilterBar(order, orderReverse, filter) {
    const [category, setCategory] = useState("")
    const [order, setOrder] = useState("order")
    const [filtro, setfiltro] = useState("*")

    function handleSelectCategory(e){
        setCategory(e.target.value)
    }

  return (
    <div className='filterBar__container'>
        <label htmlFor="order">Order: </label>
        <select  name='order'>
            <optgroup>
                <option value="Ascending" onSelect={orderReverse}>Ascending</option>
                <option value="Descending" onSelect={order}>Descending</option>
            </optgroup>
        </select>
        <label htmlFor='category'>Filter By: </label>
        <select>
            <optgroup onChange={handleSelectCategory}>
                <option value="gender" onSelect={orderReverse}>Gender</option>
                <option value="species" onSelect={orderReverse}>Species</option>
                <option value="origin" onSelect={orderReverse}>Origin</option>
                <option value="status" onSelect={orderReverse}>Status</option>
            </optgroup>
        </select>
    </div>
  )
}

const mapDispatchToProps = dispatch =>{
    return {
      order: ()=>{dispatch(order())},
      orderReverse: ()=>{dispatch(orderReverse())},
      filter: (category,filtro)=>{dispatch(filter(category,filtro))}
    }
  } 

  export default connect(null,mapDispatchToProps)(FilterBar)