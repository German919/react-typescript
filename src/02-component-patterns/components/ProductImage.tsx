import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImgage from "../assets/no-image.jpg";
import { productContext } from './ProductCard';

export const ProductImage = ({img=""}) =>{

    const {product} = useContext(productContext);

    let imgToShow:string;

    if(img){
        imgToShow = img
    }else if(product.image){
        imgToShow = product.image
    }else{
        imgToShow = noImgage
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="product image" />
    )
}
