import {connect} from "react-redux";

const Cart = ({cart}) => {
    const {products, loading, error} = cart;
    return(
        <></>
    )
}

const mapStateToProps = (state) => {
    const {cart} = state;
    return {
        cart
    }
}

export default connect(mapStateToProps)(Cart)