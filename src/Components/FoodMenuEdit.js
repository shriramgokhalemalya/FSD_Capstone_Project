
// Incase Selective Component while checking on condition
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { isAdmin, isAuthenticated } from "../repository";
import { Redirect} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


class FoodMenuEdit extends Component {

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

    componentDidMount() {

        axios.get('http://localhost:3004/menuEdit/' + this.props.match.params.restaurantName)
            .then(result => {
                this.setState({
                    restaurant : result.data.data,
                    restaurantName:result.data.data[0].restaurantName,
                    foodItem1:result.data.data[0].foodItem1,
                    foodItem2:result.data.data[0].foodItem2,
                    price1:result.data.data[0].price1,
                    price2:result.data.data[0].price2,
                });
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        const payload = {
            foodItem1: this.state.foodItem1,
            price1: this.state.price1,
            foodItem2: this.state.foodItem2,
            price2: this.state.price2
        }

        const resName = this.state.restaurantName

        axios.post('http://localhost:3004/updateFoodMenu/'+resName, payload,headers)
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
                            defaultValue={this.state.restaurantName}
                            onChange={this.handleChange} readOnly/>
                    </div>
                    <br />
                    
                    <label for="foodItem1">Food Item 1</label>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="foodItem1"
                            defaultValue={this.state.foodItem1}
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Price for Item 1</label>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            name="price1"
                            defaultValue={this.state.price1}
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Food Item 2</label>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="foodItem2"
                            defaultValue={this.state.foodItem2}
                            onChange={this.handleChange} />
                    </div> <br />

                    <label for="foodItem1">Price for 2nd Item</label>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            name="price2"
                            defaultValue={this.state.price2}
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Update Menu" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Reset to original value" />
                </form>
        </div>
    );
}

}

export default withRouter(FoodMenuEdit);
