import React from "react"

class Product extends React.Component{

    p_Name = "Iphone 12 mini"
    p_Price = 45000
    p_Color = ['Blue', 'Black', 'Red']
    p_image="https://m.media-amazon.com/images/I/31jQ91XUDhS._SY445_SX342_QL70_FMwebp_.jpg"
    render(){

        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card"></div>
                            <div className="card-header">
                                <img src={this.p_image} alt="" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                <li className="list-group-item">{this.p_Name}</li>
                                    <li className="list-group-item">{this.p_Price}</li>
                                    <li className="list-group-item">{this.p_Color[0]}</li>
                                    <button className="btn btn-primary">addcart</button>
                                </ul>
                            </div>
                        

                    </div>
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[1]}</li>
                                <button className="btn btn-primary">addcart</button>

                            </ul>
                        </div>
                    
                    </div>
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[2]}</li>
                                <button className="btn btn-primary">addcart</button>

                            </ul>
                        </div>
                    
                      </div>
                      </div>
                </div>
            </div>
    
    }
}

export default Product