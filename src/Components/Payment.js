// Incase Selective Component while checking on condition
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            upi:null,
            pin:null
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
        const payment = {
            upi: this.state.upi,
            pin: this.state.pin

        }
        axios.post('http://localhost:3004/payment', payment,headers)
            .then(result => {
                //console.log(result.data.response);
                //alert(this.state.foodmenu.response[0].restaurantName);
                
                this.props.history.push({
                    pathname: '/ordersummary'
                });
                
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
        return(
            <div>

            <h2>Foob Box Payment gateway</h2>
            <p>Cart total: {this.props.location.state.carttotal}/- rupees</p>
            <h4>UPI Payment gateway</h4>
            < br />
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="upi"
                            placeholder="Enter UPI name here"
                            onChange={this.handleChange} required/>
                    </div> <br />

                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            name="pin"
                            placeholder="Enter UPI pin here"
                            onChange={this.handleChange} required/>
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Confirm payment and order" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Cancel" />
                </form>
            
            </div>   

        )    

}
}

export default withRouter(Payment);