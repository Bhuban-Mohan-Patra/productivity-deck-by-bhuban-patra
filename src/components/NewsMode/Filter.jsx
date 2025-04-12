import React from "react";

import { Button, DatePicker, Input, Pane, Select, Typography } from "neetoui";

const Filter = ({ isOpenFilter, setIsOpenFilter }) => (
  <Pane
    closeOnEsc
    closeOnOutsideClick={false}
    isOpen={isOpenFilter}
    onClose={() => setIsOpenFilter(false)}
  >
    <Pane.Header>
      <Typography className="text-xl font-bold" style="h2" weight="bold">
        title
      </Typography>
    </Pane.Header>
    <Pane.Body>
      <div className="space-y-4">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Keyword or a phrase</label>
          <Input
            required
            className="w-96"
            placeholder="Enter keyword"
            // value={searchKey}
            // onChange={({ target: { value } }) => setSearchKey(value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Category</label>
          <div className="flex space-x-2">
            <Select
              isClearable
              isMulti
              isSearchable
              className="w-96"
              // options={newsCategoryOptions}
              placeholder="Select category"
              // value={newsCategory}
              // onChange={setNewsCategory}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Date From</label>
          <DatePicker
            className="w-96"
            format="YYYY-MM-DD"
            // maxDate={dayjs()}
            placeholder="YYYY-MM-DD"
            // value={date.dateFrom}
            // onChange={(_, dateStr) =>
            //   setDate(previous => ({
            //     ...previous,
            //     dateFrom: dateStr,
            //   }))
            // }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Date to</label>
          <DatePicker
            className="w-96"
            format="YYYY-MM-DD"
            // maxDate={dayjs()}
            // minDate={dayjs(date.dateFrom, t("news.filter.datePlaceholder"))}
            placeholder="YYYY-MM-DD"
            // value={date.dateTo}
            // onChange={(_, dateStr) => {
            //   setDate(previous => ({
            //     ...previous,
            //     dateTo: dateStr,
            //   }));
            // }}
          />
        </div>
      </div>
    </Pane.Body>
    <Pane.Footer className="flex space-x-2">
      <Button
        label="Done"
        style="primary"
        // onClick={handleFilter}
      />
      <Button
        label="Clear all"
        style="secondary"
        // onClick={ClearFilter}
      />
    </Pane.Footer>
  </Pane>
);

export default Filter;
