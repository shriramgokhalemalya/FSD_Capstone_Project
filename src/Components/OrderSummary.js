// Incase Selective Component while checking on condition
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class OrderSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            upi:null,
            pin:null
        }
    }


    //<h2>{this.props.location.state.detail.restaurantName}</h2><br/>
    render() {
            if (!isAuthenticated())
            return (<Redirect to='/login' />)
        return(
            <div>

                <h2>Summary Page</h2>
                <br></br>
                <p>Order is Successful. We are delivering your favourite food shortly!!</p>
                <p>Thanks for ordering!!!</p>
            
            
            </div>   

        )    

}
}

export default withRouter(OrderSummary);