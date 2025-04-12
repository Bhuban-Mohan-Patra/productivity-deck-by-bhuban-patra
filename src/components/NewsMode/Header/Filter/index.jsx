import { useCallback, useState } from "react";

import { Filter as FilterIcon } from "neetoicons";
import { Button } from "neetoui";

import Pane from "./Pane";

const Filter = () => {
  const [isFilterPaneOpen, setIsFilterPaneOpen] = useState(false);

  const toggleFilterPane = useCallback(() => {
    setIsFilterPaneOpen(prev => !prev);
  }, []);

  return (
    <div className="relative">
      <Button icon={FilterIcon} style="secondary" onClick={toggleFilterPane} />
      <Pane closePane={toggleFilterPane} isOpen={isFilterPaneOpen} />
    </div>
  );
};

export default Filter;
