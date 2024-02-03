const GetTotals = ({ cart }) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (const [key, value] of cart.entries()) {
    totalAmount += value.quantity;
    totalCost += value.quantity * value.price;
  }
  return {
    totalAmount,
    totalCost,
  };
};

export default GetTotals;
