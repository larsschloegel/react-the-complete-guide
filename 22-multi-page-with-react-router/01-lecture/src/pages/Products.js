import {Link} from "react-router-dom";

const PRODUCTS = [
    {id: 'p1', title: "Product 1"},
    {id: 'p2', title: "Product 2"},
    {id: 'p3', title: "Product 2"},
]
export default function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((item) => (
                    <li key={item.id}><Link to={`${item.id}`}>{item.title}</Link></li>
                ))}
            </ul>
        </>
    )
}