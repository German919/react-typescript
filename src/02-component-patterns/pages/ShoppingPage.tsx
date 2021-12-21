import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css";

const product = {
    id:"1",
    title:"coffee chocolate",
    image:"./coffee-mug.png",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>

            <div style={{display: 'flex', flexWrap:"wrap"}}>
                <ProductCard className="bg-dark" product={product} >

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />

                </ProductCard> 

                <ProductCard 
                    product={product}
                    className="bg-dark"
                    >

                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons"/>

                </ProductCard>

                <ProductCard 
                    product={product}
                    style={{backgroundColor:"blue", color:"white"}}
                    >

                    <ProductImage style={{padding: "10px", width:"calc(100% - 20px)"}} />
                    <ProductTitle style={{color:"white", fontWeight:"bold"}}/>
                    <ProductButtons style={{display: 'flex', justifyContent: 'end'}} />

                </ProductCard>
            </div>
        </div>
    )
}
