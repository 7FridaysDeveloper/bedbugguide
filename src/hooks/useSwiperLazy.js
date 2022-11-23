import { useContext } from "react";
import ThemeContext from "../context/theme-context";

const useSwiperLazy = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const loadSwiper = (inView) => {
    if(inView) {
      dispatch({ type: "swiperLazy" })
    }
  };
  return [state?.isLoadSwiper, loadSwiper];
};

export default useSwiperLazy;
