import {connect} from "react-redux";

import {addToCartCreator} from "../../../../store/actionCreator"

const ProductCard = ({title, url, price, description, addToCart}) => {
    const handleClick = ()=> {
        const newProduct = {
            title, price, url
        };
        addToCart(newProduct)
    }
    return (
    <li className='product-list-card'>
        <img src={url} alt={title}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button type='button' onClick={handleClick} >Add to cart</button>
    </li>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (newProduct)=> {
            const action = addToCartCreator(newProduct)
            dispatch(action); // dispatch(addToCartCreator(newProduct))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);