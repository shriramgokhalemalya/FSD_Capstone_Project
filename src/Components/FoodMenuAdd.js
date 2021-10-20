
// Incase Selective Component while checking on condition
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { isAdmin, isAuthenticated } from "../repository";
import { Redirect} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


class FoodMenuAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant:{},
            restaurantName: null,
            foodItem1: null,
            foodItem2:null,
            price1:null,
            price2:null
        }
        //this.handleClick = this.handleClick.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }
    

    handleSubmit = (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        const payload = {
            restaurantName:this.state.restaurantName,
            foodItem1: this.state.foodItem1,
            price1: this.state.price1,
            foodItem2: this.state.foodItem2,
            price2: this.state.price2
        }

        axios.post('http://localhost:3004/addFoodMenu', payload,headers)
            .then(result => {
                console.log(result);
                this.props.history.push('/admin');
            })
            .catch(error => {
                console.log(error);
                console.log('There is some error..!!')
            })
    }

    //<h2>{this.props.location.state.detail.restaurantName}</h2><br/>
    render() {
        if (!isAuthenticated())
        return (<Redirect to='/login' />)
        if (!isAdmin())
        return (<Redirect to='/login' />)
    return (
        <div>
            <h2>Edit this restaurant menu</h2>
            <form onSubmit={this.handleSubmit}>
                    <label for="restaurantName">Restaurant Name</label>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="restaurantName"
                            placeholder="Enter Restaurant Name"
                            onChange={this.handleChange}/>
                    </div>
                    <br />
                    
                    <label for="foodItem1">Food Item 1</label>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="foodItem1"
                            placeholder="Enter Food Item 1"
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Price for Item 1</label>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            name="price1"
                            placeholder="Enter Price for Food Item1"
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Food Item 2</label>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="foodItem2"
                            placeholder="Enter Food Item2"
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Price for 2nd Item</label>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            name="price2"
                            placeholder="Enter Price for Item 2"
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Add Menu" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Reset" />
                </form>
        </div>
    );
}

}

export default withRouter(FoodMenuAdd);