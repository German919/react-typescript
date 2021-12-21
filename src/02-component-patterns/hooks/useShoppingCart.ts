import { useState } from "react";
import { Product } from '../interfaces/interfaces';
import { ProductIntCart } from '../pages/ShoppingPage';

export const useShoppingCart = () =>{

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductIntCart}>({});

    const onProductCountChange = ({count, product}:{count: number, product: Product}) => {
        
        setShoppingCart(oldProduct => {

           const productInCart : ProductIntCart = oldProduct[product.id] || { ...product, count:0}

           if( Math.max( productInCart.count + count, 0) > 0 ){
               productInCart.count += count;
               return {
                   ...oldProduct,
                   [product.id] : productInCart
               }
           }

           const {[product.id]:toDelete, ...rest} = oldProduct;

           return {
               ...rest
           }
        }) 

    }

    return {
        shoppingCart,
        onProductCountChange
    }
}