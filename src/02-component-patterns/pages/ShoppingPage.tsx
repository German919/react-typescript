import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"

const product = {
    id:"1",
    title:"coffee cholate",
    image:"./coffee-mug.png",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>

            <div style={{display: 'flex', flexWrap:"wrap"}}>
                <ProductCard product={product}>

                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />

                </ProductCard> 

                <ProductCard product={product}>

                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                </ProductCard>
            </div>
        </div>
    )
}
