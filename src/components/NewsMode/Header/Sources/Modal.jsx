import { useState } from "react";

import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Button, Select, Typography } from "neetoui";
import { assoc } from "ramda";
import { useHistory } from "react-router-dom";
import routes from "routes";
import { buildUrl } from "utils/url";

import { getNewsSourceOptions } from "./utils";

const Modal = ({ isOpenModal, closeModal }) => {
  const [newsSources, setNewsSources] = useState(
    () => getNewsSourceOptions()[0]
  );

  const history = useHistory();

  const queryParams = useQueryParams();

  const newsSourceOptions = getNewsSourceOptions();

  const updateFiltersInQueryParams = useFuncDebounce(sources => {
    history.replace(
      buildUrl(
        routes.news,
        filterNonNull(assoc("sources", sources.join(","), queryParams))
      )
    );
  });

  const handleSourcesChange = selectedOptions => {
    setNewsSources(selectedOptions);
    const selectedSources = selectedOptions.map(option => option.value);
    updateFiltersInQueryParams(selectedSources);
  };

  return (
    <Modal
      closeOnEsc
      closeOnOutsideClick={false}
      isOpen={isOpenModal}
      size="medium"
      onClose={closeModal}
    >
      <Modal.Header>
        <Typography style="h2" weight="bold">
          Change source
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Select
          isMulti
          label="NewSource"
          options={newsSourceOptions}
          placeholder="SelectSource"
          value={newsSources}
          onChange={handleSourcesChange}
        />
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-2">
        <Button label="Cancel" style="text" onClick={closeModal} />
        <Button label="Save" style="primary" onClick={closeModal} />
      </Modal.Footer>
    </Modal>
  );
};

export default Modal;
