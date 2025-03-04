import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './Button';
import { CartContext } from '../store/cart-context';
import { UserProgressContext } from '../store/user-progress-context';

export default function Header() {
    const cart = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);
    const totalCartItems = cart.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgress.showCart();
    }

    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt='A restaurant' />
                <h1>Reactfood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}> Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}