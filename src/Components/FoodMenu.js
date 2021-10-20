import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class FoodMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fooditem1:null,
            fooditem2:null,
            Item1_Count :0,
            Item2_Count :0,
            carttotal:0,
            itemCount:0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }
    */


    handleClick = (event) => {

        const price = event.target.name;
        this.setState({Item1_Count:  parseInt(this.state.Item1_Count) + 1});
        //this.setState({foodItem1: event.target.arg1});
        this.setState({
            itemCount: parseInt(this.state.itemCount) + 1})

        this.setState({carttotal: parseInt(this.state.carttotal)+ parseInt(this.state.Item1_Count)*price })
    } 

    handleClick1 = (event) => {

        const price = event.target.name;
        this.setState({Item2_Count:  parseInt(this.state.Item2_Count) + 1});
        //this.setState({foodItem1: event.target.arg1});
        this.setState({
            itemCount: parseInt(this.state.itemCount) + 1})

        this.setState({carttotal: parseInt(this.state.carttotal)+ parseInt(this.state.Item2_Count)*price })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push({
            pathname: '/checkout',
            
            state: {
                cartsize : this.state.itemCount,
                carttotal : this.state.carttotal
            }
            
        });

    }


    //<h2>{this.props.location.state.detail.restaurantName}</h2><br/>
    render() {
        if (!isAuthenticated())
        return (<Redirect to='/login' />)
    return (
        <div>
            <h2>Here is your food options</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Item1</th>
                        <th>Item1 Price</th>
                        <th>Quantity</th>
                        <th>Item2</th>
                        <th>Item2 Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.location.state.fooddetail.map((food, index) =>{
                        return (
                            <tr key={index}>
                                <td>{food.restaurantName}</td>
                                <td>{food.foodItem1}</td>
                                <td>{food.price1}</td>
                                <td>
                                <input type="number" name={food.price1} onChange = {this.handleClick}/>
                                </td>
                                <td>{food.foodItem2}</td>
                                <td>{food.price2}</td>
                                <td>
                                <input type="number"  name={food.price2} onChange = {this.handleClick1}/>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br></br>
            <br></br>

            <table className="table">
                <tbody>
                    <tr>
                        <td>Item1</td>
                        <td>Item2</td>
                    </tr>
                    <tr>
                        <td>{this.state.Item1_Count}</td>
                        <td>{this.state.Item2_Count}</td>
                    </tr>

                </tbody>


            </table>

               <p>Cart Count: {this.state.itemCount}</p>
               <p>Cart total: {this.state.carttotal}</p>
               <br></br>
               <br></br>
               <br></br>
               <button type="submit" className="btn btn-secondary" value="Checkout" onClick={this.handleSubmit}>Checkout</button>
        </div>
    );
}

}

export default withRouter(FoodMenu);
