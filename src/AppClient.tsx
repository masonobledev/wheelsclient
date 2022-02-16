import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './auth/auth';
import Header from './header/index';
import Homepage from '.homepage/index';

import './App.css';

interface stateType {
  sessionToken: any;
  userRole: any;
}

export default class AppClient extends Component<{}, stateType> {
  constructor(props: "") {
    super(props);
    this.state = {
      sessionToken: "",
      userRole: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ sessionToken: localStorage.getItem("token") });
    }

    if (localStorage.getItem("userRole")) {
      this.setState({ userRole: localStorage.getItem("userRole") });
    }
  }

  updateUserRole = (newUserRole: string) => {
    localStorage.setItem("userRole", newUserRole);
    this.setState({ userRole: newUserRole });
    console.log(this.state.userRole);
  };

  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.state.sessionToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  protectedViews = () => {
    return this.state.sessionToken ? (
      <div>
        <Homepage token={this.state.sessionToken}/>
      </div>
    ) : (
      <Auth
        updateToken={this.updateToken}
        updateUserRole={this.updateUserRole}
      />
    );
  };

  render() {
    return (
      <div>
      <Header />
      <Router>
        <div className="App">{this.protectedViews()}</div>
      </Router>
      <Footer />
      </div>
    );
  }


export default AppClient;
