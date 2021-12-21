import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImgage from "../assets/no-image.jpg";
import { productContext } from './ProductCard';
export interface Props {
    img?: string,
    className?: string,
    style? : React.CSSProperties
}

export const ProductImage = ({img, className, style}: Props) =>{

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
        <img 
            className={`${styles.productImg} ${className}` } 
            style={style}
            src={imgToShow} 
            alt="product image" />
    )
}
