import React, { useState } from 'react'
const regexEmail = /^[\w]{1,20}+@[\w]{1,10}+\.[a-z]{2,4}$/i;
const regexPassword = /^(?=\D*\d)\S{6,}$/i;
const regexPasswordNum = /^\d/i;
function validar(inputs){
    let errores = {}
    if(!regexEmail.test(inputs.correo)){
        errores.email = "Please introduce a valid email"
    } else if(regexEmail.test(inputs.correo)){ delete errores.email}
    if(!regexPassword.test(inputs.password)){
        if(!regexPasswordNum.test(inputs.password)){
            errores.password = "Password must contain at least one number"
        } else { errores.password = "Password must be at least 6 characters long"}
    } else if(regexPassword.test(inputs.password)){
        delete errores.password
    }
    return errores;
}
function Form() {
    const [access, setAccess] = useState(false);
    const [inputs, setInputs] = useState({
        "correo":"",
        "password":""
    })
    const [errores, setErrores] = useState({})

    function handleChange(e){
        setInputs({...inputs,[e.target.name]:e.target.value})
        setErrores(validar({...inputs,[e.target.name]:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        let erroresLength = Object.keys(errores).length
        if(erroresLength){
            window.alert("All fields must be valid")
        } else {
            window.alert("All right")
            setAccess(true)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='correo'>Email:</label>
        <input name="correo" type="text" value={inputs.correo} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" value={inputs.password} onChange={handleChange}/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Form