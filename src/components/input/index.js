import React from 'react'

import './input.css'

const Input = ({ name, label, change, value }) => (
    <div className="group">
        <input onChange={change} type="text" name={name} value={value} required/>
        <span className="bar" />
        <label>{label}</label>
    </div>
)

export default Input