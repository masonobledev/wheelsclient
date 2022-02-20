import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Auth from './auth/auth';
import 'antd/dist/antd.css';

interface stateType {
  sessionToken: any;
  userRole: any;
}

export default class App extends Component<{}, stateType> {
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
      {/* <Header brand='' /> */}
      <BrowserRouter>
        <div className="App">{this.protectedViews()}</div>
      </BrowserRouter>
      {/* <Footer /> */}
      </div>
    );
  }
};

