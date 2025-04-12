import React from "react";

import { Button, Modal, Select, Typography } from "neetoui";

const ChangeSource = ({ isOpenModal, setIsOpenModal }) => (
  <Modal
    closeOnEsc
    closeOnOutsideClick={false}
    isOpen={isOpenModal}
    size="medium"
    onClose={() => setIsOpenModal(false)}
  >
    <Modal.Header>
      <Typography style="h2" weight="bold">
        "Change source"
      </Typography>
    </Modal.Header>
    <Modal.Body>
      <Select
      // label={t("news.list.newSource")}
      // options={newsSourceOptions}
      // placeholder={t("news.list.selectSource")}
      // value={newsSource}
      // onChange={setNewsSource}
      />
    </Modal.Body>
    <Modal.Footer className="flex justify-start">
      <Button
        label="Save"
        style="primary"
        onClick={() => setIsOpenModal(false)}
      />
      <Button
        label="Cancel"
        style="text"
        onClick={() => setIsOpenModal(false)}
      />
    </Modal.Footer>
  </Modal>
);

export default ChangeSource;
