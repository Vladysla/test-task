import React, { Fragment } from 'react'

export default ({ name, label, change, value }) => (
    <Fragment>
        <input onChange={change} type="checkbox" id={name} name={name} value={value} />
        <label htmlFor={name}>{label}</label>
    </Fragment>
)