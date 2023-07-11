
import { connect, useDispatch } from 'react-redux'
import { order, orderReverse, filter } from '../../Redux/actions'
import { useState } from 'react'

function FilterBar() {
    const [category, setCategory] = useState("gender")
    const [filtro, setFiltro] = useState("")
    const dispatch = useDispatch()

    function handleOrder(e){
        if(e.target.value === "Ascending"){
            dispatch(orderReverse(false))
        } else {
            dispatch(order(true))
        }
    }
    
    function handleSelectCategory(e){
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    function handleFilter(e){
        setFiltro(e.target.value)
        console.log(filtro + category)
        dispatch(filter(category,filtro))
    }

  return (
    <div className='filterBar__container'>
        <label htmlFor="order">Order: </label>
        <select  name='order' onChange={handleOrder}>
            <optgroup>
                <option value="Ascending" >Ascending</option>
                <option value="Descending" >Descending</option>
            </optgroup>
        </select>
        <label htmlFor='category'>Filter By: </label>
        <select onChange={handleSelectCategory}>
            <optgroup name="category" onSelect={handleSelectCategory}>
                <option value="gender" onSelect={handleSelectCategory}>Gender</option>
                <option value="species" onSelect={handleSelectCategory}>Species</option>
                <option value='status' onSelect={handleSelectCategory}>Status</option>
            </optgroup>
        </select>
        <label htmlFor='filtro'>Filter By: </label>
        <select name="filtro" onChange={handleFilter}>
            <optgroup>
        {category === "gender" && <>
                <option value='Male' onSelect={handleFilter}>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='Unknown'>Unknown</option>
            </>
        }
        {category === "species" && <>
                <option value='Human' defaultValue>Human</option>
                <option value='Alien'>Alien</option>
                <option value='Humanoid'>Humanoid</option>
                <option value='Unknown'>Unknown</option>
            </>
        }
        {category === "status" &&  <>
                <option value='Alive' defaultValue>Alive</option>
                <option value='Death'>Death</option>
                <option value='Unknown'>Unknown</option>
            </>
        }
            </optgroup>
        </select>
    </div>
  )
}

// const mapDispatchToProps = dispatch =>{
//     return {
//       order: ()=>{dispatch(order())},
//       orderReverse: ()=>{dispatch(orderReverse())},
//       filter: (category,filtro)=>{dispatch(filter(category,filtro))}
//     }
//   } 

//   export default connect(null,mapDispatchToProps)(FilterBar)
export default (FilterBar)