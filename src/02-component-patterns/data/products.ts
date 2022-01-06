import { Product } from "../interfaces/interfaces";

const product1 = {
    id:"1",
    title:"coffee chocolate",
    image:"./coffee-mug.png",
}
const product2 = {
    id:"2",
    title:"coffee",
    image:"./coffee-mug2.png",
}

const products : Product[] = [product1, product2];

export default products;
