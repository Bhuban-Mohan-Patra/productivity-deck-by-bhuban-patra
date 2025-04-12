import { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Button } from "neetoui";

import Modal from "./Model";

const Sources = () => {
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  const toggleModal = () => setIsSourcesModalOpen(prev => !prev);

  return (
    <>
      <Button icon={MenuHorizontal} style="text" onClick={toggleModal} />
      <Modal closeModal={toggleModal} isOpenModal={isSourcesModalOpen} />
    </>
  );
};

export default Sources;
