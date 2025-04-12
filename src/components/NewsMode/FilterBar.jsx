import React from "react";

import { Button, Tag, Typography } from "neetoui";

const arr = [1, 2];

const FilterBar = () => (
  <div className="flex items-center justify-center gap-x-2">
    <Typography className="text-gray-500" style="body1">
      results for :
    </Typography>
    {arr.map(item => {
      const isArray = Array.isArray(item.value);

      return isArray ? (
        item.value.map(value => (
          <Tag
            className="cursor-pointer"
            key={value}
            label={value}
            style="secondary"
            // onClose={() => handleTagClose({ ...item, value })}
          />
        ))
      ) : (
        <Tag
          className="cursor-pointer"
          key={item.label}
          label={item.value}
          style="secondary"
          // onClose={() => handleTagClose(item)}
        />
      );
    })}
    <Button
      className="text-gray-500"
      size="small"
      style="text"
      // onClick={handleClearTag}
    >
      Clear all
    </Button>
  </div>
);

export default FilterBar;
