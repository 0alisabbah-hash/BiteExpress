import React from 'react';
import MenuItems from '../Components/MenuItems';
const menuItems =[
    {id:1 , name:"Cheeseburger",price :8,description :"Juicy beef patty with melted cheese."},
    {id:2,name:"Pepperoni Pizza", price:12,description:"Classic pizza with loaded pepperoni."},
    {id:3,name:"Chicken Wings",price: 7 , description:"Crunchy Fried wings with multiple sauce options."}
]
const Menu = () => {
    const addTocart = (menuItems) =>{
        console.log("Added:" ,menuItems.name);
    }
    return(
        <div className='menuPage'>
            <h2>Our Menu</h2>
            <div className='menuList'>
                {menuItems.map((item)=>(
                    <MenuItems key={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    onAdd={() => addTocart(menuItems)}/>
                ))}
            </div>
        </div>
    )
}
export default Menu;