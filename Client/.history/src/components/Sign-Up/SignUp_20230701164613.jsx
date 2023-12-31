import { useState } from "react"
import logo from "../../img/Logo.png"
import styles from './SignUp.modules.css'

const regexEmail = /^([\w]{1,20})+@([\w]{1,10})+\.([a-z]{2,4})$/i;
const regexPassword = /^(?=\D*\d)\S{6,}$/i;
const regexPasswordNum = /^\d/i;

function validar(inputs){

  let errores = {}

  if(!regexEmail.test(inputs.correo)){
      errores.email = "Please introduce a valid email"
  }  else if(regexEmail.test(inputs.correo)){ delete errores.email}
  
  if(!regexPassword.test(inputs.password)){
      if(!regexPasswordNum.test(inputs.password)){
          errores.password = "Password must contain at least one number"
      } else { errores.password = "Password must be at least 6 characters long"}
  } else if(regexPassword.test(inputs.password)){
      delete errores.password
  }
  
  return errores;
}

function SignUp() {
  
  const [errores, setErrores] = useState({})
  const [inputs, setInputs] = useState({
    "correo":"",
    "password":""
  })

  function handleChange(e){
      setInputs({...inputs,[e.target.name]:e.target.value})
      setErrores(validar({...inputs,[e.target.name]:e.target.value}))
  }

  function handleSubmit(e){
      e.preventDefault()
      props.funcion(inputs)
  }

  return (
    
    <div className={styles.Container}>
      <img src={logo} alt="Logo Rick and Morty Characters" />
      <form onSubmit={handleSubmit}>
        <label htmlFor='correo'>Email:</label>
        <input name="correo" type="text" value={inputs.correo} onChange={handleChange} />
        {errores.email?<p className={styles.Error}>{errores.email}</p>:""}
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" value={inputs.password} onChange={handleChange}/>
        {errores.password?<p className={styles.Error}>{errores.password}</p>:""}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp