import React, { Component } from 'react';
import Signup from './signup';
import Login from './login';
import { Button, Card } from '@material-ui/core';

type LoginProps = {
	updateToken: (newToken: string) => void;
	updateUserRole: any;
};

type UserState = {
	showLogin: boolean;
};

export default class Auth extends Component < LoginProps, UserState > { 
    constructor(){
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

    render(){  /*added 'render' and wrap*/
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


