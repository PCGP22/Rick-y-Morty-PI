import React from 'react'

function Form() {
  return (
    <form>
        <label htmlFor='correo'>Correo:</label>
        <input name="correo" type="text" />
        <label htmlFor="password">Contraseña:</label>
        <input name="password" type="password"/>
    </form>
  )
}

export default Form