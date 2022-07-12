import classes from './CartButton.module.css';
import {cartActions} from "../../store/cartSlice";
import {useDispatch,useSelector} from "react-redux";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartIsShow = useSelector(state =>state.cart.isShown )
    const is = useSelector(state =>state.cart )
    const cartClickHander = () => {
        dispatch(cartActions.toggle());
    }
  return (
    <button onClick={cartClickHander} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};




export default CartButton;
