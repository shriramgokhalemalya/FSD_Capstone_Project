
// Incase Selective Component while checking on condition
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { isAdmin, isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodmenu: []
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        axios.get('http://localhost:3004/foodmenu')
            .then(result => {
                this.setState({ foodmenu: result.data.response });
                console.log(this.state.foodmenu);
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    deleteMenu(id) {

        axios.get('http://localhost:3004/delete/' + id)
            .then(result => {
                console.log(result);
                console.log('Employee Deleted Successfully..!!');
                window.location.reload();

            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })

        
    }           

    render() {
        if (!isAuthenticated())
            return (<Redirect to='/login' />)
        if (!isAdmin())
            return (<Redirect to='/login' />)
        return (
            <div>
                <h2>Welcome to Food Box admin page</h2><br/>
                <h4>Please make necessary changes in food menu</h4><br/>
                <Link to={'/foodmenuadd'} className='btn btn-secondary'>Add new menu</Link><br /><br />
                <table className="table">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Item1</th>
                        <th>Item1 Price</th>
                        <th>Item2</th>
                        <th>Item2 Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.foodmenu.map((food, index) =>{
                        return (
                            <tr key={index}>
                                <td>{food.restaurantName}</td>
                                <td>{food.foodItem1}</td>
                                <td>{food.price1}</td>
                                <td>{food.foodItem2}</td>
                                <td>{food.price2}</td>
                                <td>
                                        <Link to={'/foodmenuedit/' + food.restaurantName} className='btn btn-secondary'>Edit Menu</Link>
                                </td>
                                <td>
                                <button onClick={() => this.deleteMenu(food.restaurantName)} className='btn btn-danger'>Delete</button>
                                </td>              
                            </tr>
                        );
                    })}
                </tbody>
            </table>
               
            </div>
        );
    }

}

export default withRouter(Admin);