import React, { Component } from 'react';
import APIURL from '../helpers/environment';

type State = {
    username: string,
    password: string,
    signup: true,
    errorText: string,
};

type LoginReq = {
    username: string,
    password: string,
};

interface LoginProps {
    updateToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void
}

export default class Login extends Component<LoginProps, State> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            signup: true,
            errorText: '',
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('hit handleSubmit')
        console.log(this.state.username)
        
        const reqBody = {
            username: this.state.username,
            password: this.state.password,
        }

        try {
            const res = await fetch(`${APIURL}/user/login`, {
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
                this.setState({
                    errorText: errMsg.charAt(0).toUpperCase() + errMsg.slice(1) + '.'
                })
                
            } else {
                console.log(json.Message);
                this.props.updateToken(json.sessionToken);
                this.props.updateUserRole(json.user.userRole);
            }
        } catch (e) {
            console.log(e);
        } 
    };
        
    render() {
        return (
            <Form onFinish={this.handleSubmit}>
                <h3 style={{ textAlign: 'center' }}>Login</h3>
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
                        Login
                    </Button>
                </Form.Item>
            </Form>
        )
    };
};

