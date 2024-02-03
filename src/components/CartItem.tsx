import { useGlobalContext } from "../Context";

const CartItem = ({ id, name, image, price, quantity }) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useGlobalContext();
  return (
    <tr>
      <td>
        <div className="item">
          <img src={image} alt="" />
          <div className="item-info">
            <div className="item-name">{name}</div>
            <button className="remove-btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div className="item-quantity">
          <button className="decrease-btn" onClick={() => decreaseQuantity(id)}>
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button className="increase-btn" onClick={() => increaseQuantity(id)}>
            +
          </button>
        </div>
      </td>
      <td>$0</td>
    </tr>
  );
};

export default CartItem;
