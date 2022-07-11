import React from "react";

const sortAndSetArrayState = (key, order, array) => {
  if (key === "date") {
    // eslint-disable-next-line default-case
    switch (order) {
      case "asc": {
        return array.sort((a, b) => a.date > b.date);
      }
      case "desc": {
        return array.sort((a, b) => a.date < b.date);
      }
    }
  }
};

export default sortAndSetArrayState;
