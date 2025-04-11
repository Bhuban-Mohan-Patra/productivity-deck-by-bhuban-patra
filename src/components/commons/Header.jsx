import React from "react";

const Header = ({ title, actionBlock }) => (
  <div className="flex justify-between px-10 pt-6 text-2xl font-bold ">
    <div>{title}</div>
    <div>{actionBlock}</div>
  </div>
);

export default Header;
