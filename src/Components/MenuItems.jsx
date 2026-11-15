import '../Styles/MenuItems.css';
const MenuItems = ({ name, price,img, description, onAdd }) => {
  return (
    <div className="menu-items" style={{
        backgroundImage: `url(${img})`,
      }}>
      
      <h2>{name}</h2>
      <p>{description || "Chef's special"}</p>
      <p>${price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
};
export default MenuItems;
