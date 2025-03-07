import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart";

const CartButton = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    function clickMyCartHandler() {
        dispatch(cartActions.toggleCart());
    }

    return (
    <button className={classes.button} onClick={clickMyCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
