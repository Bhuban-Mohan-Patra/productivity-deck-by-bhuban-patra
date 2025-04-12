import { useState } from "react";

import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Search } from "neetoicons/icons";
import { Input, Typography } from "neetoui";
import { assoc } from "ramda";
import { useHistory } from "react-router-dom";
import routes from "routes";
import { buildUrl } from "utils/url";

import Filter from "./Filter";
import Sources from "./Sources";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");

  const history = useHistory();

  const queryParams = useQueryParams();

  const updateSearchTermInQueryParams = useFuncDebounce(searchTerm => {
    history.replace(
      buildUrl(
        routes.news,
        filterNonNull(
          assoc("searchTerm", searchTerm || null, searchTerm ? queryParams : {})
        )
      )
    );
  });

  const handleSearchKeyChange = ({ target: { value } }) => {
    updateSearchTermInQueryParams(value);
    setSearchKey(value);
  };

  return (
    <div className="border-b p-4">
      <div className="flex">
        <div className="flex flex-1 items-center gap-4">
          <Typography className="font-bold" style="h1">
            News Mode
          </Typography>
          <Sources />
          <Filter />
        </div>
        <Input
          className="w-96 flex-grow-0"
          placeholder="Search keyword or a phrase"
          suffix={<Search />}
          type="search"
          value={searchKey}
          onChange={handleSearchKeyChange}
        />
      </div>
    </div>
  );
};

export default Header;
