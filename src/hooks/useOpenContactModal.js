import { useContext } from "react";
import ThemeContext from "../context/theme-context";

const useOpenContactModal = () => {
  const theme = useContext(ThemeContext);
  const isShowContactModal = theme?.state?.isShowContactModal ?? false;
  const toggleModal = (payload = null) => {
    theme.dispatch({
      type: "contactModal",
      payload: typeof payload === 'boolean' ? payload : !isShowContactModal,
    });
  };

  return [isShowContactModal, toggleModal];
};

export default useOpenContactModal;
