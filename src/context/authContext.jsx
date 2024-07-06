import { useEffect, useState } from "react";
import { createContext } from "react";
const initialState = {
  registerModal: false,
  loginModal: false,
  historyModal: false,
};
const AuthConext = createContext({
  auth: initialState,
  handleRegisterModal: () => {},
  handleLoginModal: () => {},
  onCloseModal: () => {},
  handleHistoryModal: () => {},
  setHistories: () => {},
  histories: [],
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const getHistory = localStorage.getItem("histories");
  const [histories, setHistories] = useState(JSON.parse(getHistory) ?? []);
  useEffect(() => {
    if (histories !== null && histories !== undefined) {
      localStorage.setItem("histories", JSON.stringify(histories));
    }
  }, [histories]);
  const handleRegisterModal = () => {
    setAuth((prevState) => ({
      ...prevState,
      registerModal: true,
      loginModal: false,
    }));
  };
  const handleLoginModal = () => {
    setAuth((prevState) => ({
      ...prevState,
      loginModal: true,
      registerModal: false,
    }));
  };
  const handleHistoryModal = () => {
    setAuth((prevState) => ({
      ...prevState,
      loginModal: false,
      registerModal: false,
      historyModal: true,
    }));
  };

  const onCloseModal = () => {
    setAuth(initialState);
  };
  return (
    <AuthConext.Provider
      value={{
        auth,
        handleLoginModal,
        handleRegisterModal,
        onCloseModal,
        handleHistoryModal,
        setHistories,
        histories,
      }}
    >
      {children}
    </AuthConext.Provider>
  );
};

export default AuthConext;
