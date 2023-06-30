import React from 'react'
import logo from "../../Banner/Logo.png"

function About() {
  const pj ={
    id:"00",
    image:"https://t3.ftcdn.net/jpg/03/31/62/20/240_F_331622080_WlWdLjpSjS4L2aGHa1x78FwIzvf0X4Ru.jpg",
    name:"Paulo Gutiérrez",
    species:"Web Programmer",
    gender:"Male",
    status:"Studying",
    location:{name:"Henry"},
    origin:{name:"Tierra"},
    extra:"Loves Front End"
  }
  return (
    <div className='detailsCon'>
      <img className='detailsImg' src={pj.image?pj.image:logo} alt="character profile"/>
        
          <div className='detailsDatos'>

            <p>
              <strong>Id: #</strong>{pj.id? pj.id:"Undefined"}
              <strong> Nombre: </strong>{pj.name? pj.name:"Undefined"}
            </p>
            <p><strong>Species: </strong>{pj.species? pj.species:"Undefined"}</p>
            <p><strong>Gender: </strong>{pj.gender? pj.gender:"Undefined"}</p>
            <p><strong>Status: </strong>{pj.status? pj.status:"Undefined"}</p>
            <p><strong>Location: </strong>{pj.location? pj.location.name:"Undefined"}</p>
            <p><strong>Origin: </strong>{pj.origin? pj.origin.name:"Undefined"}</p> 
            <p><strong>Extra: </strong>{pj.extra? pj.extra:"Undefined"}</p> 
          </div>  
      </div>
  )
}

export default About