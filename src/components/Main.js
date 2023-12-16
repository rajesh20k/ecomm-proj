import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { PRODUCT_LIST } from "../redux/constant";
import { productList } from "../redux/productAction";
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component from saga", data);

  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <>
       <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Call Product List
        </button>
      </div>
      <div className="product-container">
        {
        data.map((item)=> <div className="product-item">
          <img src={item.filename}></img>
            <div> name:{item.title}</div>
            <div> type:{item.type}</div>
            <div> description:{item.description}</div>
            <div> height:{item.height}</div>
            <div> width:{item.width}</div>
            <div> price:{item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>

              </div>

        </div>)

        }
      </div>
    </>
  );
}

export default Main;
