import React from "react"

class Order extends React.Component{

    Product_Name="oppo";
    Product_price=20000;
    p_image="https://www.oppo.com/content/dam/oppo/product-asset-library/elsa/specs/elsa_black_sliver_1920.png"

    render(){

        return <div>

            <h2>Order Component</h2>
            <h3>Product Name{this.Product_Name}</h3>
            <h4>Product price{this.Product_price}</h4>
            <img src={this.p_image} alt=""  />
            <button class="btn btn-success">Addcart</button>
        </div>
    }

}

export default Order