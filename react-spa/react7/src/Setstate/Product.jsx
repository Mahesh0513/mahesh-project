 import React from "react";

 class Product extends React.Component{

      state={ 
         product:"oppo",
         price:20000,
         Image:"https://images.hindustantimes.com/img/2021/03/08/550x309/untitled_(85)_1615221020592_1615221026953.jpg",
         quan:1
     }

     increhandler=()=>{
         this.setState({
             quan:this.state.quan+1,
         })
     }

     decrhandler=()=>{
         this.setState({
             quan:this.state.quan-1,
         })
     }



     render(){
         return <div>
             <div className="continar">
             <pre>{JSON.stringify(this.state)}</pre>
                 <div className="row">
                     <div className="col">
                         <table className="table">
                             <thead className="bg-primary text-white">
                                 <th>Name product</th>
                                 <th>price</th>
                                 <th>image</th>
                                 <th>quan</th>
                                 <th>total price</th>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>{this.state.product}</td>
                                     <td>{this.state.price}</td>
                                     <td><img src={this.state.Image} alt=""  /></td>
                                     <td><i onClick={this.decrhandler} className='fa fa-minus-circle'>-</i>{this.state.quan}<i onClick={this.increhandler} className='fa fa-plus-circle'>+</i></td>
                                     <td> {this.state.quan * this.state.price}</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
         </div>
     }
 }

 export default Product