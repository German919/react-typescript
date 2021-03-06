import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { ProductContextProsp, Product, onChangeArgs } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProsp);

const {Provider} = productContext;

export interface Props {
    product : Product,
    children? : ReactElement | ReactElement[],
    className? : string,
    style? : React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?:number
}

export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

    const {counter, increaseBy} = useProduct({onChange, product, value});

    return (
        <Provider value= {{increaseBy, counter, product}}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
                >
                
                {
                    children
                }

            </div>
        </Provider>
    )
}

