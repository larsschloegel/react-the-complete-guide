import {
    createBrowserRouter,
    createRoutesFromElements, Route,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductPage from "./pages/Product";

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
        errorElement: <ErrorPage/>,
        children: [
            {index: true, path: '', element: <HomePage/>},
            {path: 'products', element: <ProductsPage/>},
            {path: 'products/:productId', element: <ProductPage/>}
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;