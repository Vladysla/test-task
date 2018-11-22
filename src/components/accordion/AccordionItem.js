import React, { Component } from 'react';


class AccordionItem extends Component {


    static defaultProps = {
        title: 'TITLE'
    };

    constructor(props) {
        super(props);
        this.state = { isOpen: props.isOpen }
        this.mounted = true
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick)
    }
    componentWillUnmount() {
        this.mounted = false;
        document.removeEventListener('click', this.handleDocumentClick)
    }

    handleDocumentClick = event => {
        if (
            this.mounted &&
            !this.accordionItem.contains(event.target) &&
            this.state.isOpen
        ) {
            this.setState({ isOpen: false })
        }
    };

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
            <div ref={(item) => this.accordionItem = item} className={`accordion-item ${active}`}>
                <button type="button" className="title" onClick={this.onClick}>
                    {this.props.title}
                </button>
                <div className="panel">{this.props.children}</div>
            </div>
        );
    }
}

export default AccordionItem;