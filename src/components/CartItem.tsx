const CartItem = ({ id, name, image, price, quantity }) => {
  return (
    <tr>
      <td>
        <div className="item">
          <img src={image} alt="" />
          <div className="item-info">
            <div className="item-name">{name}</div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div className="item-quantity">
          <button className="decrease-btn">-</button>
          <div className="quantity">{quantity}</div>
          <button className="increase-btn">+</button>
        </div>
      </td>
      <td>$0</td>
    </tr>
  );
};

export default CartItem;
