import "./productList.css";
import Product from "../product/Product";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Carvings!</h1>
                <p className="pl-desc">
                    Hey!! 
                    These are some products that i have worked on to let you know,
                    How i work..! 
                    Hey, It's just a peice...
                </p>

            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList
