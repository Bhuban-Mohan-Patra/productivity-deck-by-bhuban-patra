import React from "react";

const Header = ({ title = "Header" }) => (
  <div className="px-10 pt-6 text-2xl font-bold">{title}</div>
);

export default Header;
