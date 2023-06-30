import React from 'react'
import error from "../../Banner/Error.png"

function Error() {
    const pj ={
        id:"404",
        image:"https://t3.ftcdn.net/jpg/03/31/62/20/240_F_331622080_WlWdLjpSjS4L2aGHa1x78FwIzvf0X4Ru.jpg",
        name:"Not Found",
        extra:"Esta página no existe"
      }
      return (
        <div className='detailsCon'>
          <img className='detailsImg' src={error} alt="Error 404"/>
            
              <div className='detailsDatos'>
    
                <p>
                  <strong>Id: #</strong>{pj.id? pj.id:"Undefined"}
                  <strong> - Nombre: </strong>{pj.name? pj.name:"Undefined"}
                </p>
                <p><strong>Extra: </strong>{pj.extra? pj.extra:"Undefined"}</p> 
              </div>  
          </div>
      )
}

export default Error