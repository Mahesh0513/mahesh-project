import React, { useState } from "react";

let Product = () => {

        let [product, setProduct] = useState("oppo");
        let [price, setprice] = useState(20000);
        let [Image, setImage] = useState("https://images.hindustantimes.com/img/2021/03/08/550x309/untitled_(85)_1615221020592_1615221026953.jpg");
        let [qty,setqty]=useState(1)

   let increHandler = () => {
        setqty(qty+1);
    }

  let  decrHandler = () => {
       setqty(qty-1);
    }



    return (
    <div>
        <h1>Product Component</h1>
        <pre>{JSON.stringify({product,price,Image,qty})}</pre>

        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="bg-danger text-white">
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>qty</th>
                            <th>total price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product}</td>
                                <td>{price}</td>
                                <td><img src={Image} alt="" srcset="" /></td>
                                <td><button onClick={decrHandler}>-</button>{qty} <button onClick={increHandler}>+</button></td>
                                <td> {qty*price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Product;