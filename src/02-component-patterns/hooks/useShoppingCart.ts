import { useState } from "react";
import { Product } from '../interfaces/interfaces';
import { ProductIntCart } from '../pages/ShoppingPage';

export const useShoppingCart = () =>{

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductIntCart}>({});

    const onProductCountChange = ({count, product}:{count: number, product: Product}) => {
        
        setShoppingCart(oldProduct => {

           if( count === 0 ){
               const { [ product.id ]: toDelete, ...rest} = oldProduct;
               return rest;
           }

           return{
               ...oldProduct,
               [ product.id ]: {...product, count}
           }

        }) 
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}