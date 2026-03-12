import React from "react";

const useTitlecase = (msg) => {
  const newmsg = msg
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newmsg;
};

export default useTitlecase;
