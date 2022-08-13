import React, { useEffect, useState } from "react";
import axios from "axios";

const useUserStorage = () => {
  const [user, setUser] = useState(null);

  const setUserInStorage = (user) => {
    localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));

    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  };

  const deleteUserInStorage = () => {
    localStorage.removeItem("loggedNoteAppUser");
  };

  useEffect(() => {
    const loggedNoteAppUser = localStorage.getItem("loggedNoteAppUser");
    const user = loggedNoteAppUser && JSON.parse(loggedNoteAppUser);
    setUser(user);
  }, []);
  return {
    user,
    setUserInStorage,
    deleteUserInStorage,
  };
};
export default useUserStorage;
