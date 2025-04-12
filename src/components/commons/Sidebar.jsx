import React from "react";

import { Equals, TimeTracking, Globe, Book } from "@bigbinary/neeto-icons";
import { NavLink, Link } from "react-router-dom";
import routes from "routes";

const Sidebar = () => (
  <div className="flex w-16 flex-col items-center gap-3 pt-6 shadow">
    <Link exact to={routes.root}>
      <Book
        className="mb-2 rounded-md border bg-gray-500 p-1 "
        color="#ffffff"
        size={36}
      />
    </Link>
    <NavLink exact activeClassName="bg-gray-600 p-1 rounded" to={routes.kanban}>
      <Equals className="rounded-lg border bg-gray-100" size={26} />
    </NavLink>
    <NavLink
      exact
      activeClassName="bg-gray-600 p-1 rounded"
      to={routes.pomodoro}
    >
      <TimeTracking className="rounded-lg border bg-gray-100" size={26} />
    </NavLink>
    <NavLink exact activeClassName="bg-gray-600 p-1 rounded" to={routes.news}>
      <Globe className="rounded-lg border bg-gray-100" size={26} />
    </NavLink>
  </div>
);

export default Sidebar;
