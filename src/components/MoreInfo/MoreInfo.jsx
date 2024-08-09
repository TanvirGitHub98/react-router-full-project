import { useLoaderData } from "react-router-dom";

const MoreInfo=()=>{
    const dataInfo=useLoaderData();
    const {title,image,price,description}=dataInfo;
    return(
        <div className="border-2 border-red-600  mt-5 p-10">
            <img className="w-50" src={image} alt="Image"/>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            
        </div>
    )
}

export default MoreInfo;