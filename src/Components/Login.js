import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            login:false,
            store:null,
            admin:false
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLogin = (event) => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };
        const credentials = {
            email: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:3004/login', credentials,headers)
            .then(result => {
                console.log(result);
                console.log('Login Successful..!!');
                this.setState({ admin: result.data.admin })
                /*
                localStorage.setItem('login', JSON.stringify({
                    login:true,
                    token:result.data.data.token
                }));
                */
                localStorage.setItem('username', this.state.username);
                localStorage.setItem('admin', result.data.admin);
                {/*this.setState({login:true})*/}
                this.props.history.push('/customer');
            })
            .catch(error => {
                console.log(error);
                console.log('There is some error..!!')
            })
    }

    /*
    handleLogin = (event) => {
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            localStorage.setItem('username', this.state.username);
            this.props.history.push('/employees');
        } else {
            alert('Login Failed..')
        }
    }
    */

    render() {
        return (
            <div>
                <h2>Login</h2> <br />
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter UserName Here"
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password Here"
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Login" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Clear Fields" />
                </form>
            </div>
        )
    }
}