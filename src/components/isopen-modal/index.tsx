import { ReactNode } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type propsType = {
  label: string;
  onClick?: any;
  disabled?: any;
  children?: ReactNode;
};

export default function IsOpenModal(props: propsType) {
  const { label, onClick, disabled, children } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-cyan-900 p-2 text-white px-8 w-[10vw] my-1 rounded"
      >
        {label}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="grid justify-items-end ">
          <button
            onClick={handleClose}
            className="bg-cyan-900 p-2 text-white px-8 w-[10vw] my-1 rounded"
          >
            close
          </button>
          </div>
          {children}
        </Box>
      </Modal>
    </>
  );
}
