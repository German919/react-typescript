import { Props as ProductCardsProps} from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductButtonsProps} from '../components/ProductButtons';
export interface Product {
    id: string,
    title: string,
    image?: string
}
export interface ProductContextProsp {
    counter: number,
    increaseBy:(value: number)=>void,
    product: Product
}
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps ) => JSX.Element,
    Buttons: (Props: ProductButtonsProps)=> JSX.Element
}

export interface onChangeArgs {
    product: Product
    count: number
}