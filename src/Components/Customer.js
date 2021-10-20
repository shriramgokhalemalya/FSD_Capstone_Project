
// Incase Selective Component while checking on condition
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fooditem : null,
            foodmenu: []
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };
        const foodsearch = {
            fooditem: this.state.fooditem

        }
        console.log(foodsearch);
        axios.post('http://localhost:3004/foodSearch', foodsearch,headers)
            .then(result => {
                this.setState({ foodmenu: result.data })
                //console.log(result.data.response);
                //alert(this.state.foodmenu.response[0].restaurantName);
                
                this.props.history.push({
                    pathname: '/foodmenu',
                    state: {fooddetail: this.state.foodmenu.response}
                });
                
            })
            .catch(error => {
                console.log(error);
                console.log('There is some error..!!')
            })
    }

    render() {
        if (!isAuthenticated())
            return (<Redirect to='/login' />)
        return (
            <div>
                <h2>Search your food favourite item here</h2><br/>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="fooditem" 
                    placeholder="Search your favourite item"
                    onChange={this.handleChange} />
                </div>
                <br/>
                <input type="submit" className="btn btn-secondary" value="Search food item" /> | &nbsp;
                <input type="reset" className="btn btn-secondary" value="Clear Fields" />
            </form>
            <a>Sample search keywords dosa,Idli,Roti,Pizza & Burger </a>      
            </div>
        );
    }

}

export default withRouter(Customer);

/*

const Customer = () => {
    return (
        <div>
            <h3>Welcome to Foodbox</h3>
            <a>We are here to serve you!!</a>
            <p>Please search food item you want to enjoy !!</p>
        </div>
    )
}
ReactDOM.render(Customer, document.getElementById('root'));


// const Customer = ({ match }) => {
//     return (
//         <div>
//             <h3>Customer Management</h3>
//             <h4>Hello {match.params.name}!!</h4>
//             <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>
//         </div>
//     )
// }

export default Customer;
*/