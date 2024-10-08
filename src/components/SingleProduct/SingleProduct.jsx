import { Link } from "react-router-dom";

const SingleProduct=({product})=>{
    const {title,price,image,description}=product;
    return(
        <div className="border-2 border-red-700 mt-5 p-5 w-50 gap-5 h-25">
            <h1>{title}</h1>
            <img className="w-200 h-100" src={image} alt="image"/>
            <h1>{price}</h1>
            <h1>{description}</h1>
            <Link to={`/Product/${product.id}`}> 
               <button className="bg-red-600 p-2 mt-5">More Info</button>
            </Link>

        </div>
    )
}
export default SingleProduct;