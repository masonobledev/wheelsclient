import React, { Component } from 'react';
import { Form, Input, Modal } from 'antd';
import APIURL from '../helpers/environment';

type state = {
    //year: any,
    make: string,
    model: string,
    VIN: string,
};

type props = {
	token: string;
	closeCreate(): void;
};

export default class newVehicle extends Component<props, state> {
	constructor(props: props) {
		super(props);
		this.state = {
            //year: { value: 1900 },
            make: '',
            model: '',
            VIN: ''
		};
	}

    handleCancel = () => {
		// this.props.createOff();
	};

    handleSubmit = async (e: any) => {
        // e.preventDefault();
        // const APIURL = `http://localhost:5000`;

        fetch(`${APIURL}/car/new`, {
			method: 'POST',
			body: JSON.stringify({
				vehicleListing: {
                    //year: this.state.year,
                    make: this.state.make,
                    model: this.state.model,
                    VIN: this.state.VIN
				}
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
			
		})
			.then((response) => {
				console.log(response.body)
				return response.json()
			})

			.then((data) => {
				console.log(data)
			})
			.then(() => {this.props.closeCreate()});
	};

	render() {
		return (
			<Modal
                title="What kind of car do you have?"
                visible={true}
                onOk={this.handleSubmit}
                okText="Submit"
                onCancel={this.props.closeCreate}
            >
                <Form>
                    {/* <Form.Item>
                        <Input
                            type="number"
                            name="year"
                            placeholder="year"
                            value={this.state.year}
                            onChange{(e) => this.setState({ year: e.target.value })}
                        />
                    </Form.Item> */}
                    <Form.Item>
                        <Input
                            type="text"
                            placeholder="make"
                            value={this.state.make}
                            onChange{(e) => this.setState({ make: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="text"
                            placeholder='model'
                            value={this.state.model}
                            onChange{(e) => this.setState({ model: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            type='text'
                            placeholder='VIN'
                            value={this.state.VIN}
                            onChange{(e) => this.setState({ VIN: e.target.value })}
                        />
                    </Form.Item>
                </Form>
            </Modal>
		);
	}
};

