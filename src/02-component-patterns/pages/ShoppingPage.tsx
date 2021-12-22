import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";
import { Product } from '../interfaces/interfaces';
import products  from "../data/products";

export interface ProductIntCart extends Product {
    count : number
}

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>
               
                    <ProductCard 
                        key={product.id}
                        product={product}
                        className="bg-dark"
                        initialValues = {{
                            count:4,
                            maxCount:10
                        }}
                       
                    >
                        {
                            ({ reset, increaseBy, count, isMaxCountReached })=> (
                                <>
                                    <ProductImage className="custom-image" />
                                    <ProductTitle className="text-white" />
                                    <ProductButtons className="custom-buttons"/>

                                    <button onClick={reset}>reset</button>

                                    <button onClick={()=>increaseBy(-2)} > -2 </button>
                                    <button 
                                        onClick={()=>increaseBy(2)} 
                                        className={isMaxCountReached ? styles.disabled : ""}
                                        > 
                                        +2 </button>
                                    <span> {count} </span>
                                </>
                            )
                        }
                        
                    </ProductCard>
           
        </div>
    )
}
