import React, { Component } from 'react';
import Homepage from './homepage/Homepage';
import Auth from './auth/Auth';
import { Header } from './header/Header';
import { Footer } from './footer/footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           WheelsClient under construction!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

      
//     </div>
//   );
// }

// export default App;

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
      <Header />
      <Router>
        <div className="App">{this.protectedViews()}</div>
      </Router>
      <Footer />
      </div>
    );
  }


};