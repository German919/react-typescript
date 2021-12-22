import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { ProductContextProsp, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProsp);

const {Provider} = productContext;

export interface Props {
    product : Product,
    // children? : ReactElement | ReactElement[],
    children: (args: ProductCardHandlers) => ReactElement,
    className? : string,
    style? : React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?:number, 
    initialValues?: InitialValues
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value= {{increaseBy, counter, product, maxCount}}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
                >
                
                {
                    children({
                        count : counter,
                        isMaxCountReached,
                        maxCount :initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }

            </div>
        </Provider>
    )
}

