import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class AccordionItem extends Component {


    static defaultProps = {
        title: 'TITLE'
    };

    constructor(props) {
        super(props);
        this.state = { isOpen: props.isOpen };
        this.mounted = true;
    }

    handleDocumentClick = event => {
        if (
            this.mounted &&
            !ReactDOM.findDOMNode(this).contains(event.target) &&
            this.state.isOpen
        ) {
            this.setState({ isOpen: false });
        }
    };

    componentDidMount() {
        if (this.props.atomic) {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
        document.removeEventListener('click', this.handleDocumentClick);
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