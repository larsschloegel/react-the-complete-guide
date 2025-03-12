import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router";

export default function BaseLayout() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}