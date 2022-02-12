import React, { Component } from 'react';
import APIURL from '../helpers/environment';

type SignupState = {
    username: string,
    password: string
};

interface SignupProps {
    updateToken: (newToken: string) => void;
    updateUserRole: any;
}

export default class Signup extends Component <SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{

		const reqBody = {
            user: {
            username: this.state.username,
            password: this.state.password,
            }
        }

		try {
            const res = await fetch(`${APIURL}/user/create`, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                },
            })

			const json = await res.json();

			if (json.errors) {
                let errMsg = json.errors[0].message
				console.log(errMsg)
            } else {
                console.log(json);
                this.props.updateToken(json.confirmToken);
				this.props.updateUserRole(json.userRole);
            }
		} catch (e) {
            console.log(e);
        }
	};
    
    render () {
        return (
            <Form onFinish={this.handleSubmit}>
				<h3 style={{ textAlign: 'center' }}>Signup</h3>
				<Form.Item label="Username">
					<Input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={(e) => this.setState({ username: e.target.value })}
					/>
				</Form.Item>
				<Form.Item label="Password">
					<Input
						type="password"
						placeholder="Password"
						value={this.state.password}
						name="password"
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Signup
					</Button>
				</Form.Item>
			</Form>

        );
    }
}