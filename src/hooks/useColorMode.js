import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";

const useColorMode = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  const toggleColorMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    dispatch(setTheme(newMode));
  };

  return [colorMode, toggleColorMode];
};

export default useColorMode;
