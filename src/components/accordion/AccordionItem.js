import React, { Component } from 'react';


class AccordionItem extends Component {


    static defaultProps = {
        title: 'TITLE'
    };

    constructor(props) {
        super(props);
        this.state = { isOpen: props.isOpen };
    }

    onClick = () => {
        this.setState(prevState => (
            {
                isOpen: !prevState.isOpen
            }
        ));
    };

    render() {
        let active = (this.state.isOpen) ? 'active' : ''

        return (
            <div className={`accordion-item ${active}`}>
                <button type="button" className="title" onClick={this.onClick}>
                    {this.props.title}
                </button>
                <div className="panel">{this.props.children}</div>
            </div>
        );
    }
}

export default AccordionItem;