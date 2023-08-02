import React from 'react'
import { incrAction, decrAction } from '../redux/Product/Product.action'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
  let dispatch = useDispatch();

  let Product = useSelector((state) => {
    return state;
  });
  let incrHandler = () => {
    //dispatch action
    dispatch(incrAction())
  }
  let decrHandler = () => {
    dispatch(decrAction())
  }
  return (
    <div>
      <h3>Product Component</h3>
      <pre>{JSON.stringify(Product)}</pre>
      <button onClick={decrHandler}>-</button>
      Default Qty: {Product.qty}
      <button onClick={incrHandler}>+</button>
    </div>
  )
}

export default Product
