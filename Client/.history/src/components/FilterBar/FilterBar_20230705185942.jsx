
import { connect, useDispatch } from 'react-redux'
import { order, orderReverse, filter } from '../../Redux/actions'
import { useState } from 'react'

function FilterBar(order, orderReverse, filter) {
    const [category, setCategory] = useState("gender")
    const [filtro, setFiltro] = useState("*")
    const dispatch = useDispatch()

    function handleOrder(e){
        if(e.target.value === "Ascending"){
            dispatch(orderReverse())
        } else {
            dispatch(order())
        }
    }
    
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
        <select  name='order' onChange={handleOrder}>
            <optgroup>
                <option value="Ascending" >Ascending</option>
                <option value="Descending" >Descending</option>
            </optgroup>
        </select>
        <label htmlFor='category'>Filter By: </label>
        <select>
            <optgroup name="category" onChange={handleSelectCategory}>
                <option value="gender" selected>Gender</option>
                <option value="species" >Species</option>
                <option value="status" >Status</option>
            </optgroup>
        </select>
        <label htmlFor='filtro'>Filter By: </label>
        <select name="filtro" onChange={handleFilter}>
            <optgroup>
        {category === "gender" && <>
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </>
        }
        {category === "species" && <>
                <option value="Human" selected>human</option>
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

// const mapDispatchToProps = dispatch =>{
//     return {
//       order: ()=>{dispatch(order())},
//       orderReverse: ()=>{dispatch(orderReverse())},
//       filter: (category,filtro)=>{dispatch(filter(category,filtro))}
//     }
//   } 

//   export default connect(null,mapDispatchToProps)(FilterBar)
export default (FilterBar)