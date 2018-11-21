import React from 'react'

import './modal.css'

const Modal = (props) => {

    const valuesFromProps = Object.values(props)
    const keysFromProps = Object.keys(props)

    return (
        <div>
            <div className="back" />
            <aside className="modal active" tabIndex="0" onBlur={props.close} >
                <header>
                    <h2>Result</h2>
                </header>
                <section>
                    {keysFromProps.map((key, i) => (
                        <p>
                            <strong>{key}:   </strong>
                            {(typeof valuesFromProps[i] === 'function')
                                ? '':
                                (typeof valuesFromProps[i] === 'boolean' && valuesFromProps[i])
                                ? 'true':
                                (typeof valuesFromProps[i] === 'boolean' && !valuesFromProps[i])
                                ? 'false' :
                                valuesFromProps[i]
                            }
                        </p>
                    )) }
                </section>
                <footer className="footer">
                    <button onClick={props.close} type="button" className="btn">Close</button>
                </footer>
            </aside>
        </div>
    )
}

export default Modal
