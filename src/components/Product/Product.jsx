import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";


const Product=()=>{
    const allData=useLoaderData();
    console.log(allData)
    return(
        <div className="grid grid-cols-3 gap-5 ">
            {
                allData.map(product=> <SingleProduct
                key={product.id}
                product={product}
                />)
            }
            
        </div>
    )
}
export default Product;