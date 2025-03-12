import {
    createBrowserRouter,
    createRoutesFromElements, Route,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

//older React Versions
/*const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
    </Route>
);
const router = createBrowserRouter(routeDefinitions);*/

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/products', element: <ProductsPage/>},
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;