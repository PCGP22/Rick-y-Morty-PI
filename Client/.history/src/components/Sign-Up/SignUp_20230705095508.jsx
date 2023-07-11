import { useState } from "react"
import logo from "../../img/Logo.png"
import './signUp.modules.css'

const regexEmail = /^([\w]{1,20})+@([\w]{1,10})+\.([a-z]{2,4})$/i;
const regexPassword = /^(?=\D*\d)\S{6,}$/i;
const regexPasswordNum = /^\d/i;

function validar(inputs){

  let errores = {}

  if(!regexEmail.test(inputs.email)){
      errores.email = "Please introduce a valid email"
  }  else if(regexEmail.test(inputs.email)){ delete errores.email}
  if(!regexPassword.test(inputs.password)){
      if(!regexPasswordNum.test(inputs.password)){
          errores.password = "Password must contain at least one number"
      } else { errores.password = "Password must be at least 6 characters long"}
  } else if(regexPassword.test(inputs.password)){
      delete errores.password
  }
  
  return errores;
}

function SignUp({login}) {
  
  const [errores, setErrores] = useState({})
  const [inputs, setInputs] = useState({
    "email":"",
    "password":""
  })

  function handleChange(e){
      setInputs({...inputs,[e.target.name]:e.target.value})
      setErrores(validar({...inputs,[e.target.name]:e.target.value}))
  }

  function handleSubmit(e){
      e.preventDefault()
      let erroresLength = Object.keys(errores).length;
      if(!erroresLength){
        login(inputs)
      }
  }

  return (
    <div className="signUp__background">
      <div className="signUp__container">
        <img src={logo} className="signUp__container__logo" alt="Logo Rick and Morty Characters" />
        <form className="signUp__container__form" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input name="email" type="text" className="signUp__form__input" value={inputs.email} onChange={handleChange} autoFocus/>
          {errores.email?<p className="signUp__form--error">{errores.email}</p>:""}
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" className="signUp__form__input" value={inputs.password} onChange={handleChange}/>
          {errores.password?<p className="signUp__form--error">{errores.password}</p>:""}
          <button type='submit' className="signUp__form__button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp