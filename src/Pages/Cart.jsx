import "../Styles/Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return (
    <div className="cartPage">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, index) => (
        <div className="cartItem" key={index}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;