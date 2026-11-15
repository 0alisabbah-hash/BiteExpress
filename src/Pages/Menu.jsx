import React from 'react';
import MenuItems from '../Components/MenuItems';
import '../Styles/Menu.css';
import burger from '../Assets/Cheeseburger.jpg'
import pizza from '../Assets/Pepperoni-Pizza.jpg'
import wings from '../Assets/chickenwings.jpg'
const menuItems =[
    {id:1 , name:"Cheeseburger",price :8, img: burger,description :"Juicy beef patty with melted cheese."},
    {id:2,name:"Pepperoni Pizza", price:12,img: pizza ,description:"Classic pizza with loaded pepperoni."},
    {id:3,name:"Chicken Wings",price: 7 , img : wings, description:"Crunchy Fried wings with multiple sauce options."}
]
const Menu = () => {
    const addTocart = (item) =>{
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
                    img={item.img}
                    description={item.description}
                    onAdd={() => addTocart(menuItems)}/>
                ))}
            </div>
        </div>
    )
}
export default Menu;