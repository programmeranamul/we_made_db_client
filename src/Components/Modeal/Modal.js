import { Button, Modal } from "react-bootstrap";

const MyModal = ({ name,show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact with {name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your Name
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MyModal;
