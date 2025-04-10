import React from "react";

import { Button, Typography } from "neetoui";

const Column = ({ title }) => (
  <div className="flex w-80 flex-col rounded border border-black bg-white p-4">
    <Typography className="font-semibold">{title}</Typography>
    <div className="flex flex-1 flex-col gap-2" />
    <Button
      className="mt-4 justify-center rounded py-2 text-sm"
      label="Add new task +"
      style="text"
    />
  </div>
);

export default Column;
