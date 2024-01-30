import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { setThemeInLocalStorage } from "../../services/localstorage-service";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/authSlice";


const ThemeToggler = () => {
  const dispatch = useDispatch()
  const theme = useSelector(store => store.auth.theme)
  const toggleTheme = () => {
    setThemeInLocalStorage(theme === "dark" ? "light" : "dark");
    dispatch(setTheme((theme === "dark" ? "light" : "dark")));
  };
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon title="Light Theme" className="w-6 h-6 text-orange-400 sm:w-8 sm:h-8 lg:w-6 lg:h-6" />
      ) : (
        <MoonIcon title="Dark Theme" className="w-6 h-6 text-sky-950 sm:w-8 sm:h-8 lg:w-6 lg:h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
