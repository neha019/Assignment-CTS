import React, { Component } from "react";
import { Button } from "reactstrap";
import './Home.css';

var DropDown = [];
var RadioButton = [];
var obj;
var id = [];
var fieldType = [];
var label = [];

class Home extends Component {
    constructor() {
        super();

        this.state = {
            textAreaValue: '',
            buttonClick: false,
            name: '',
            email: '',
            phoneNumber: '',
            select: 'Select',



        }
    }

    handleChange = (event) => {
        console.log(event)
        console.log(event.target.value);
        this.setState({
            textAreaValue: event.target.value
        })
    }

    selectChange = (event) => {
        console.log(event)
        console.log(event.target.value);
        this.setState({
            select: event.target.value
        })
    }

    radioButton = () => {
        RadioButton.map((radio) => (
            { radio }
        ))
    }

    dropdownSelection = () => {
        DropDown.map((option) => (
            <option value={option} key={option}>{option}</option>

        ))
    }

    getEvaluation = () => {
        // console.log(this.state.textAreaValue);
        // DropDown = [];
        // RadioButton = [];
        obj = '';
        console.log(this.state.textAreaValue)
        this.setState({
            textAreaValue: ''
        })
        obj = Function('return (' + this.state.textAreaValue + ')')();
        console.log(obj)
        // var str = this.state.textAreaValue.replace('//g', '').split('\n').map((ele, ind) => console.log(ele[ind]))
        console.log(obj.forEach(ele => console.log(ele.fieldType)))
        this.setState({ buttonClick: true })
        if (obj) {
            obj.forEach(ele => {
                console.log(ele.DataSource, ele.name, ele.label, ele.fieldType);

                id.push(ele.name);
                label.push(ele.label);
                fieldType.push(ele.fieldType);

                if (ele.DataSource !== undefined && ele.fieldType === 'DropDown') {
                    ele.DataSource.forEach(source => DropDown.push(source))
                }
                if (ele.DataSource !== undefined && ele.fieldType === 'RadioButton') {
                    ele.DataSource.forEach(source => RadioButton.push(source))
                }

            });
            this.setState({ textAreaValue: this.state.textAreaValue })
        }

    }

    selectradioOption = (radioEvent) => {
        let idValue = '';
        idValue = radioEvent.target.value;
        console.log(idValue)
    }

    render() {
        var count = 0;
        return (

            <div className="divBlock">
                <label>JSON : </label>
                {/* <textarea cols="20" rows="6" value={this.state.textAreaValue} onChange={this.handleChange}></textarea> */}
                <textarea id="textArea" name="text" rows={50} cols={20} value={this.state.textAreaValue} onChange={this.handleChange}></textarea>
                {' '}
                <Button key="unique" variant="primary" onClick={this.getEvaluation}>
                    {'Evaluate'}
                </Button>
                {' '}
                {(this.state.buttonClick === true) && (
                    <div className="userInput">
                        {obj.map(element => (
                            <>
                                <label id={element.label}>{element.label + ':'}</label>
                                <input type={element.fieldType} key={element.name} id={element.name} name={element.name} onChange={this.selectradioOption}/>


                                <br />
                            </>
                        ))}


                        {/* <label id="email">Email : </label>
                        <input type="email" name="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                        <br />
                        <label id="city">City : </label> */}
                        {/* <input type="select" name="select" onChange={this.selectChange}>
                            {this.state.option.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </input>
                        <br />
                        <label id="cityType">City Type : </label>
                        {this.state.radioSource.map((radio) => (
                            <>
                                <input id="radioButton" type="radio" name="radio1" value={radio.value} onChange={this.selectradioOption} />
                                {radio.value}
                            </>
                        ))}
                        <br /> */}
                        {/* <label id="phone">Phone Number : </label>
                        <input type="text" id="phoneNumber" name="Phone" value={this.state.phoneNumber} onChange={(e) => { console.log(e.target.name); this.setState({ phoneNumber: e.target.value }) }}></input> */}

                    </div>
                )}


            </div>
        )
    }
}

export default Home;
