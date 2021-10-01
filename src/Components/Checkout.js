// Incase Selective Component while checking on condition
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carttotal : null
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({carttotal: event.target.name});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push({
            pathname: '/payment',
            
            state: {
                carttotal: this.state.carttotal
            }
            
        });

    }


    //<h2>{this.props.location.state.detail.restaurantName}</h2><br/>
    render() {
            if (!isAuthenticated())
            return (<Redirect to='/login' />)
        return(
            <div>

            <h2>Foob Box Checkout</h2>
            <p>Cart total: {this.props.location.state.carttotal}/- rupees</p>
            <p>Cart Item Count: {this.props.location.state.cartsize}</p>
            <h4>Delivery details</h4>
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="customername"
                            placeholder="Enter Customer name here"
                            name={this.props.location.state.carttotal}
                            onChange={this.handleChange} required/>
                    </div> <br />

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter delivery address here"
                            required/>
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Proceed to paymemt" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Cancel" />
                </form>

            </div>   

        )    

}
}

export default withRouter(Checkout);