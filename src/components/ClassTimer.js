import React, { Component } from 'react';

class ClassTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(()=> {
            this.setState({
                date: new Date(),
            }, 
            ()=> {
                this.props.change(this.state.date);
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
             <div>{this.state.date.toLocaleTimeString()}</div>
        );
    }
}

export default ClassTimer;