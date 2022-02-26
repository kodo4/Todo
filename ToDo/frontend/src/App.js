import React from "react";
import logo from './logo.svg';
import './App.css';
import './Style.css';
import UsersList from "./components/Users";
import axios from "axios";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
        }).catch(error => console.log(error))
  }

  render () {
    return (
        <div className="wrapper">
            <div className="Menu">
                <Menu/>
            </div>
            <div className="content">
                <div>
                  <UsersList users={this.state.users}/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    )
  }
}

export default App;
