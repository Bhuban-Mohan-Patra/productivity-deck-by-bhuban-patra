import { useState } from "react";

import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Button, Modal, Select, Typography } from "neetoui";
import { assoc } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import routes from "routes";
import { buildUrl } from "utils/url";

import { getNewsSourceOptions } from "./utils";

const SourcesModal = ({ isOpenModal, closeModal }) => {
  const [newsSources, setNewsSources] = useState(
    () => getNewsSourceOptions()[0]
  );
  const { t } = useTranslation();
  const history = useHistory();

  const queryParams = useQueryParams();

  const newsSourceOptions = getNewsSourceOptions();

  const updateFiltersInQueryParams = useFuncDebounce(sources => {
    history.replace(
      buildUrl(
        routes.news.index,
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
          {t("news.sourcesModal.title")}
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Select
          isMulti
          label={t("news.sourcesModal.sourceLabel")}
          options={newsSourceOptions}
          placeholder={t("news.sourcesModal.sourcePlaceholder")}
          value={newsSources}
          onChange={handleSourcesChange}
        />
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-2">
        <Button label={t("common.cancel")} style="text" onClick={closeModal} />
        <Button label={t("common.save")} style="primary" onClick={closeModal} />
      </Modal.Footer>
    </Modal>
  );
};

export default SourcesModal;
