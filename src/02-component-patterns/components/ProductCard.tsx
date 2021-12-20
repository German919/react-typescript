import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProsp, Props } from '../interfaces/interfaces';



export const productContext = createContext({} as ProductContextProsp);

const {Provider} = productContext;

export const ProductCard = ({children, product}:Props) => {

    const {counter, increaseBy} = useProduct();

    return (
        <Provider value= {{increaseBy, counter, product}}>
            <div className={styles.productCard}>
                
                {
                    children
                }

            </div>
        </Provider>
    )
}

