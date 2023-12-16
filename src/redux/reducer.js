import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  //     if (action.type === ADD_TO_CART) {
  //     console.warn("ADD_TO_CART condtion ", action);

  //     // some logic
  //     return data;
  //   } else {
  //     return "no action called";
  //   }
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condtion ", action);
      return [action.data,...data] // destruct old data
    case REMOVE_FROM_CART:
        console.warn("REMOVE_FROM_CART condtion ", action);
             
       // data.length= data.length? data.length-1:[]
       const remainingItems= data.filter((item)=>item.id!=action.data)

        return [...remainingItems] // destruct old data
      case EMPTY_CART:
          console.warn("EMPTY_CART1 condtion ", action);
         data=[]
          return [...data] // destruct old data

    default:
      return data;
  }
};
