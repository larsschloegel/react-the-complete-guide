import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Header() {
    const {changeTheme} = useContext(ThemeContext);
    return (
      <header>
        <h1>Demo Website</h1>
        <button onClick={changeTheme}>Toggle Theme</button>
      </header>
    );
}  