import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Accordion, AccordionItem } from './components/accordion'
import Input from './components/input'
import Checbox from './components/checkbox'
import Modal from './components/modal'

import './main.css'

class Main extends Component
{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            pepperoni: false,
            pepper: false,
            doubleCheese: false,
            showModal: false
        }
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    renderIngredients = () => {
        return (
            <div style={{ padding: '10px' }}>
                <h3 style={{ textAlign: 'center' }}>Ingredients</h3>
                <div className="ingredients" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Checbox change={this.handleChange} name="pepperoni" label="Pepperoni sausage" value={this.state.pepperoni}/>
                    <Checbox change={this.handleChange} name="pepper" label="Hot pepper" value={this.state.pepper}/>
                    <Checbox change={this.handleChange} name="doubleCheese" label="Double cheese" value={this.state.doubleCheese}/>
                </div>
            </div>
        )
    }

    showModal = (e) => {
        e.preventDefault()
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render(){
        return (
            <div className="container">
                { this.state.showModal ? <Modal { ...this.state } close={this.closeModal}/> : null }
                <div className="main">
                    <form className="main-form" onSubmit={this.showModal}>
                        <div className="form-left">
                            <div className="top-img">
                                <img className="main-img" src="/img/pizza_PNG44076.png" alt="pizza"/>
                            </div>
                            <div className="bottom-img">
                                <ul>
                                    <li><img src="/img/pizza_PNG44092.png" alt=""/></li>
                                    <li><img src="/img/pizza_PNG44092.png" alt=""/></li>
                                    <li><img src="/img/pizza_PNG44092.png" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-right">
                            <div className="container">
                                <div className="order-main">
                                    <div className="order-header">
                                        <h2>ny street pizza</h2>
                                    </div>
                                    <div className="order-body">
                                        <div className="order-price">
                                            <div className="new-price">
                                                <p><span>$</span>15.00</p>
                                            </div>
                                            <div className="old-price">
                                                <p><span>$</span>20.00</p>
                                                <span>- 20%</span>
                                            </div>
                                        </div>
                                        <div className="accordion-section">
                                            <Accordion atomic={true}>
                                                <AccordionItem isOpen={true} title="About pizza">
                                                    {this.renderIngredients()}
                                                </AccordionItem>
                                                <AccordionItem title="About delivery">
                                                    <Delivery />
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                        <div className="personal-info">
                                            <Input change={this.handleChange} name="name" label="Name" value={this.state.name} />
                                            <Input change={this.handleChange} name="email" label="E-mail" value={this.state.email} />
                                            <Input change={this.handleChange} name="phone" label="Phone" value={this.state.phone} />
                                            <div className="result-section">
                                                <button type="submit" onClick={this.showModal} className="result-btn">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const Delivery = () => (
    <div style={{ padding: '18px', fontSize: '18px' }}>
        <p>Our estimated despatch time is shown on each product page. Where products are shown as "In Stock" we normally despatch them between 1-3 working days after your order date.</p>
    </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'));