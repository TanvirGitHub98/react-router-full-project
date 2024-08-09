
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <div className='bg-red-600 m-1 p-3 space-x-10'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/contact'}>Contact</Link>
            
        </div>
    )
}
export default NavBar;