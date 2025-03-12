import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigation} from "react-router";

export default function BaseLayout() {
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation/>
            <main>
                {navigation.state === 'loading' && <p>Loading..</p>}
                <Outlet/>
            </main>
        </>
    );
}