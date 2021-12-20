import { useContext } from "react";
import { productContext } from './ProductCard';

import styles from "../styles/styles.module.css";
import noImgage from "../assets/no-image.jpg";

export const ProductTitle = ({title}:{title?:string}) =>{
    
    const{product} = useContext(productContext);

    return (
        <span className={styles.productDescription} >{title ? title : product.title}</span>
    )
}