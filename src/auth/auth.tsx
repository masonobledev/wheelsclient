import React, { Component } from 'react';
import Signup from './signup';
import Login from './login';
import './Auth.css';
import { Button, Card } from 'antd';

type LoginProps = {
	updateToken: (newToken: string) => void;
	updateUserRole: any;
};

type UserState = {
	showLogin: boolean;
};

export default class Auth extends Component < LoginProps, UserState > { 
    constructor(props: LoginProps){
        super(props);
        this.state = {
            showLogin: false
        };
    }
    loginToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault();
		if (this.state.showLogin === false) {
			return this.setState({
				showLogin: true
			});
		}
        if (this.state.showLogin === true) {
			return this.setState({
				showLogin: false
			});
		}
    };

    render(){  
        return (
            <div className="auth">
				<Card style={{ width: 300, marginTop: 16, marginBottom: 16 }} >
					{this.state.showLogin ? (
						<div>
							<Signup updateToken={this.props.updateToken} updateUserRole={this.props.updateUserRole} />
						</div>
					) : (
						<div>
							<Login updateToken={this.props.updateToken} updateUserRole={this.props.updateUserRole} />
						</div>
					)}
					<Button
						type="default"
						onClick={(e) => {
							this.loginToggle(e);
						}}
					>
						{this.state.showLogin ? 'Login' : 'Signup  '}
					</Button>
				</Card>
				<br />
			</div>
        );
    }
}    


