import { useGlobalContext } from "../Context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length < 1) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartArray.map((cartItem) => {
              const [key, value] = cartItem;
              return <CartItem key={key} {...value} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="cart-footer">
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
        <div className="total-cost">Total Cost: $0</div>
      </div>
    </div>
  );
};

export default CartContainer;
