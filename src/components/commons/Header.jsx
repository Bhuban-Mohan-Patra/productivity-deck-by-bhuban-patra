import React from "react";

const Header = ({ title, actionBlock, changeSourceButton, filterButton }) => (
  <div className="flex justify-between  pt-6 text-2xl font-bold">
    <div className="flex items-end gap-1">
      <div>{title}</div>
      <div className="cursor-pointer">{changeSourceButton}</div>
      <div className="cursor-pointer">{filterButton}</div>
    </div>
    <div>{actionBlock}</div>
  </div>
);

export default Header;
