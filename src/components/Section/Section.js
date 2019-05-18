import React, { Component } from 'react';
import '../Section/Section.css';

//Component
import Lighter from '../Bulbs/Lighter/Lighter';

class Section extends Component {
    state = {
        lights: [],
        isEmpty: false
    }

    addLamp = () => {
        let id = Math.random();
        this.state.lights.push(<Lighter key={id}>On</Lighter>)
        this.setState(!this.state.isEmpty ? this.state.lights : null)
        console.log(this.state.lights);
    }

    deletLamp = () => {
        let id = Math.random();
        this.state.lights.pop(<Lighter key={id}>On</Lighter>)
        this.setState(!this.state.isEmpty ? this.state.lights : null)
    }


    render() {
        return (
            <section className="section">
                <div className="section_conteiner">
                    <div className="lights_container">
                        {this.state.lights.map(bulb => {
                            return bulb
                        })}
                    </div>
                </div>
                <div className="switch_container">
                    <button className="btn" onClick={this.addLamp} >add new lamp</button>
                    <button className="btn" onClick={this.deletLamp} >delete lamp</button>
                    <button className="btn" onClick={this.autoSwitch} >auto switch lamp</button>
                </div>
            </section>
        );
    }
}

export default Section;