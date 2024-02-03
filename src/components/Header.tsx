import { useGlobalContext } from "../Context";
const Header = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <div className="header-container">
      <h3>Shopping Cart</h3>
      <div className="cart">
        <span className="cart-count">{totalAmount}</span>
        <p>Items</p>
      </div>
    </div>
  );
};
export default Header;
