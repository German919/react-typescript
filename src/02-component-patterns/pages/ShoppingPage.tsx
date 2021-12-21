import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css";
import { Product } from '../interfaces/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';
import products  from "../data/products";

export interface ProductIntCart extends Product {
    count : number
}

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>

            <div style={{display: 'flex', flexWrap:"wrap"}}>
                {
                    products.map(product => (

                    <ProductCard 
                        key={product.id}
                        product={product}
                        className="bg-dark"
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0 }
                    >

                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons"/>

                    </ProductCard>

                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product])=>(
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark"
                            style={{width:"100px"}}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons"/>

                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
