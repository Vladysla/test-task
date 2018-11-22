import React, { Component } from 'react';
import './accordion.css'

class Accordion extends Component {

    state = {
        doClose: true
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return child
        });
    }

    render() {
        return <div className="accordion">{this.renderChildren()}</div>;
    }
}

export default Accordion;