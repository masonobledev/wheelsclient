import React, { Component } from 'react';
import { Form, Input, Modal } from 'antd';
import APIURL from '../helpers/environment';

type state = {
    year: number,
    make: string,
    model: string,
    VIN: string,
};

type props = {
	token: string;
	closeCreate(): void;
};


export default class NewVehicle extends Component<props, state> {
	constructor(props: props) {
		super(props);
		this.state = {
            year: '',
            make: '',
            model: '',
            VIN: '',
        };
	}

    handleSubmit = async (e: any) => {

        fetch(`${APIURL}/car/new`, {
			method: 'POST',
			body: JSON.stringify({
				product: {
                    year: this.state.year,
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
				title="Add a vehicle"
				visible={true}
				onOk={this.handleSubmit}
				okText="Submit"
				onCancel={this.props.closeCreate}
			>
				<Form>
					<Form.Item>
						<Input
							type="text"
							name="year"
							placeholder="year"
							value={this.state.year}
							onChange={(e) => this.setState({ brand: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="make"
							value={this.state.make}
							name="make"
							onChange={(e) => this.setState({ profile: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="model"
							value={this.state.model}
							name="model"
							onChange={(e) => this.setState({ shape: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="VIN"
							value={this.state.VIN}
							name="VIN"
							onChange={(e) => this.setState({ wrapper: e.target.value })}
						/>
					</Form.Item>
				</Form>
			</Modal>
		);
	}
};
