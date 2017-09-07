import React from 'react'

const Input = ({active, inputField, children, onChange}) => {
  return (
    <div className='form-group'>
      <label for={inputField.id}>{children}</label>
      <input type='text' className='form-control' id={inputField.id} aria-describedby={inputField.aria} placeholder={inputField.placeholder} onChange={(e)=>onChange(e.target.value, inputField.id)} />
    </div>
  )
}

export default Input;