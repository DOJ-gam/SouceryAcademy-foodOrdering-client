import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { green } from "@material-ui/core/colors";

const CartButton = props =>{
    return <button className="btn btn-outline-danger rounded-pill text-dark fs-4 shadow">
        <span>
            <AddShoppingCartIcon fontSize="large" style={{color: green[500]}} />
        </span>
        <span>Your Cart</span>
        <span className="ms-2">7</span>
    </button>
}
export default CartButton;