const MenuItems = ({ name, price, description, onAdd }) => {
  return (
    <div className="menu-items">
      <h2>{name}</h2>
      <p>{description || "Chef's special"}</p>
      <p>{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
};
export default MenuItems;
