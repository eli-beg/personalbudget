import { useEffect, useState } from "react";


const useUserStorage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const newUser = userStorage && JSON.parse(userStorage);
    setUser(newUser);
  }, []);
  return {
    user,
   
  };
};
export default useUserStorage;
