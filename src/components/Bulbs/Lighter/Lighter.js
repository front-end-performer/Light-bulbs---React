import React, { Component } from 'react';
import '../Lighter/Lighter.css';

class Lighter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }

    toggleHandler = () => {
       this.setState( prev => {
           return { isOn: !prev.isOn }
       });
    }

    render() {
        const attachedCls = ['lighter_light'];
        if (this.state.isOn) {
            attachedCls.push('on');
            console.log(attachedCls);
        }
        return (
            <div className="lighter">
                <div className={attachedCls.join(' ')}></div>
                <button onClick={this.toggleHandler} className="lighter_switcher">{this.props.children}</button>
            </div>
        );
    }
};

export default Lighter;