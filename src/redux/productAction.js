import { PRODUCT_LIST,SEARCH_PRODUCT,SET_PRODUCT_LIST } from "./constant";

export const productList =  () => {
  
    return {
        type: PRODUCT_LIST,
       
    }
}

export const productSearch=(query)=>{
return {
    type:SEARCH_PRODUCT,
    query,

}

}


// export const setProductList =  (data) => {
//   console.warn("Set Action ProductList",data)
//     return {
//         type: SET_PRODUCT_LIST,
//         data:data
//     }
// }
