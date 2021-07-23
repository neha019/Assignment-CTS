import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            textAreaValue: '',
            buttonClick: false,
            name: '',
            email: '',
            select: 'Select',
            option: [
                {
                    label: "Bangalore",
                    value: "Bangalore",
                },
                {
                    label: "Gurgaon",
                    value: "Gurgaon",
                },
                {
                    label: "Mysore",
                    value: "Mysore",
                },
                {
                    label: "Kolkata",
                    value: "Kolkata",
                },
                {
                    label: "Delhi",
                    value: "Delhi",
                },
            ],
            radioSource: [
                {
                    value: 'Metro'
                },
                {
                    value: 'Non-Metro'
                }
            ],
            phoneNumber: ''
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

    getEvaluation = () => {
        // console.log(this.state.textAreaValue);
        var arr = [];
        var phone = document.getElementById('phoneNumber');
        console.log(phone)
        var parsedJSON = JSON.parse(JSON.stringify(this.state.textAreaValue));
        console.log(parsedJSON)
        arr.push(parsedJSON)
        console.log(arr)
        this.setState({ buttonClick: true })
        // console.log(this.state.textAreaValue)
        if (this.state.phoneNumber !== '') {
            console.log(this.state.name, this.state.email)

            if (phone) {

                arr.push({
                    'name': phone.getAttribute('name'),
                    'label': document.getElementById('phone').textContent,

                })
                this.setState({ textAreaValue: JSON.stringify(arr).replace('/\n\t/g', '\n').
                replace('/\n/g', '').replace('/\/g', '\n').replace('/\t/g', '\n').split('\n')})
                console.log(JSON.parse(JSON.stringify(arr[0] + arr[1])))
            }

        }

    }

    selectradioOption = (radioEvent) => {
        let idValue = '';
        idValue = radioEvent.target.value;
        console.log(idValue)
    }

    render() {
        return (
            <div className="divBlock">
                <label>JSON : </label>
                {/* <textarea cols="20" rows="6" value={this.state.textAreaValue} onChange={this.handleChange}></textarea> */}
                <Input id="textArea" name="text" type="textarea" value={this.state.textAreaValue} onChange={this.handleChange}></Input>
                {' '}
                <Button variant="primary" onClick={this.getEvaluation}>
                    {'Evaluate'}
                </Button>
                {' '}
                {(this.state.buttonClick === true) && (
                    <div className="userInput">
                        <label id="username">User Name : </label>
                        <Input type="text" name="text" value={this.state.name} onChange={(e) => { console.log(e.target.nodeType, e.target.name); this.setState({ name: e.target.value }) }}></Input>
                        <br />
                        <label id="email">Email : </label>
                        <Input type="email" name="email" value={this.state.email} onChange={(e) => { console.log(e.target.name); this.setState({ email: e.target.value }) }}></Input>
                        <br />
                        <label id="city">City : </label>
                        <Input type="select" name="select" value={this.state.select} onChange={this.selectChange}>
                            {this.state.option.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </Input>
                        <br />
                        <label id="cityType">City Type : </label>
                        {this.state.radioSource.map((radio) => (
                            <>
                                <Input id="radioButton" type="radio" name="radio1" value={radio.value} onChange={this.selectradioOption} />
                                {radio.value}
                            </>
                        ))}
                        <br />
                        <label id="phone">Phone Number : </label>
                        <Input type="text" id="phoneNumber" name="Phone" value={this.state.phoneNumber} onChange={(e) => { console.log(e.target.name); this.setState({ phoneNumber: e.target.value }) }}></Input>

                    </div>
                )}
            </div>
        )
    }
}

export default Home;