import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './Button';
import { CartContext } from '../store/cart-context';

export default function Header() {
    const cart = useContext(CartContext);
    const totalCartItems = cart.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);
    
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt='A restaurant' />
                <h1>Reactfood</h1>
            </div>
            <nav>
                <Button textOnly> Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}