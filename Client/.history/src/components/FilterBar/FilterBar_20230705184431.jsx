
import {connect, useDispatch} from 'react-redux'
import { order, orderReverse, filter } from '../../Redux/actions'
import { useState } from 'react'

function FilterBar(order, orderReverse, filter) {
    const [category, setCategory] = useState("")
    const [order, setOrder] = useState("order")
    const [filtro, setFiltro] = useState("*")
    const dispatch = useDispatch()

    function handleSelectCategory(e){
        setCategory(e.target.value)
    }
    function handleFilter(e){
        setFiltro(e.target.value)
        dispatch(filter(category,filtro))
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
            <optgroup name="category" onChange={handleSelectCategory}>
                <option value="gender" onSelect={orderReverse}>Gender</option>
                <option value="species" onSelect={orderReverse}>Species</option>
                <option value="status" onSelect={orderReverse}>Status</option>
            </optgroup>
        </select>
        <label htmlFor='filtro'>Filter By: </label>
        <select name="filtro" onChange={handleFilter}>
            <optgroup>
        {category === "gender" && <>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </>
        }
        {category === "species" && <>
                <option value="Human">human</option>
                <option value="Alien">alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Unknown">Unknown</option>
            </>
        }
        {category ==="status" &&  <>
                <option value="alive">Alive</option>
                <option value="death">Death</option>
                <option value="unknow">Unknow</option>
            </>
        }
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