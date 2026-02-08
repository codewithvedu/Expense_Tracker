import { Modal, Button, Form } from "react-bootstrap";

export default function AddModal({
  show,
  handleClose,
  title,
  onSubmit,
  fieldLabel,
  fieldName,   // NEW — dynamic field name
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add {title}</Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>{fieldLabel}</Form.Label>
            <Form.Control
              name={fieldName}           // FIXED HERE
              required
              placeholder={`Enter ${fieldLabel}`}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              name="amount"
              type="number"
              min="1"
              required
              placeholder="Enter amount"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
