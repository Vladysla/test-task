import React, { Component } from 'react'

import './dropdown.css'

class Dropdown extends Component
{
    state = {
        items: this.props.items,
        selectedItem: {value: 'Choose option...', id: 0},
        showItems: false,
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    closeList = () => {
        this.setState({
            showItems: false
        })
    }

    selectItem = (item) => {
        this.setState({
            selectedItem: item
        }, this.closeList)
        this.props.change(item.id)
    }


    render () {
        return (
            <div>
                <div className="select-box--box" tabIndex="0" onClick={this.dropDown} onBlur={this.closeList}>
                    <div className="select-box--container">
                        <div className="select-box--selected-item">
                            { this.state.selectedItem.value }
                        </div>
                    </div>
                    <div
                        className="select-box--items"
                        style={{display: this.state.showItems ? 'block' : 'none'}}
                    >
                        {
                            this.state.items.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}
                                    className={this.state.selectedItem === item ? 'selected' : ''}
                                >
                                    { item.value }
                                </div>
                            ))
                        }
                    </div>
                    <input
                        value={this.state.selectedItem.id}
                        type="hidden"
                        name={this.props.name}
                    />
                </div>
            </div>
        )
    }
}

export default Dropdown