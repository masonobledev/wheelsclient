import React, { Component } from 'react';
import { Form, Input, Modal } from 'antd';
import APIURL from '../helpers/environment';

type state = {
    date: any,
    mileage: number,
    notes: string,
};

type props = {
	token: string;
	closeCreate(): void;
};


export default class NewJob extends Component<props, state> {
	constructor(props: props) {
		super(props);
		this.state = {
            date: '',
            mileage: { value: 000000 },
            notes: '',
        };
	}

	handleCancel = () => {

	};

    handleSubmit = async (e: any) => {

        fetch(`${APIURL}/work/new`, {
			method: 'POST',
			body: JSON.stringify({
				product: {
                   	date: this.state.date,
                    mileage: this.state.mileage,
                    notes: this.state.notes,
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
				title="What work did you have done?"
				visible={true}
				onOk={this.handleSubmit}
				okText="Submit"
				onCancel={this.props.closeCreate}
			>
				<Form>
					<Form.Item>
						<Input
							type="text"
							name="date"
							placeholder="date"
							value={this.state.date}
							onChange={(e) => this.setState({ date: e.target.value })}
						/>
					</Form.Item> 
					<Form.Item>
						<Input
							type="number"
							placeholder="mileage"
							value={this.state.mileage}
							name="mileage"
							onChange={(e) => this.setState({ mileage: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="notes"
							value={this.state.notes}
							name="notes"
							onChange={(e) => this.setState({ notes: e.target.value })}
						/>
					</Form.Item>
				</Form>
			</Modal>
		);
	}
};
