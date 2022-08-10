import axios from "axios";
import React, { useEffect, useState } from "react";

const useUserStorage = () => {
  const [user, setUser] = useState(null);

  const setUserInStorage = (user) => {
    localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));

    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  };
  useEffect(() => {
    const loggedNoteAppUser = localStorage.getItem("loggedNoteAppUser");
    const user = loggedNoteAppUser && JSON.parse(loggedNoteAppUser);
    setUser(user);
  }, []);
  return {
    user,
    setUserInStorage,
  };
};
export default useUserStorage;
