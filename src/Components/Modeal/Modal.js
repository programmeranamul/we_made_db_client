import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import  axios  from 'axios';


const MyModal = ({ contactOption, show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer.user);
  const proToken = localStorage.getItem("proToken")

  const onSubmit = async(data) => {
    data.token= proToken
    if (buyerAutyh.type === "Seller") {
      if(contactOption.name){
        data.buyerName = contactOption.name
        await axios.post("https://ancient-dawn-67469.herokuapp.com/contact/seller/with/buyer", data)
        reset()
      }   
      
    }
    if (buyerAutyh.type === "Buyer") {
      if(contactOption.location){
        data.location = contactOption.location;
        data.size = contactOption.size;
        data.price = contactOption.price;
        await axios.post("https://ancient-dawn-67469.herokuapp.com/contact/buyer/with/seller", data)
        reset()
      }
    }
    handleClose()
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please give your correct information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <span className="text-danger mt-2 d-block">
                This field is required
              </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-danger mt-2 d-block">
                This field is required
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-danger mt-2 d-block">
                Enter Valid Email
              </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number"
              {...register("number", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors.number?.type === "required" && (
              <span className="text-danger mt-2 d-block">
                This field is required
              </span>
            )}
            {errors.number?.type === "minLength" && (
              <span className="text-danger mt-2 d-block">
                Enter a valid number
              </span>
            )}
            {errors.number?.type === "maxLength" && (
              <span className="text-danger mt-2 d-block">
                Enter a valid number
              </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message?.type === "required" && (
              <span className="text-danger mt-2 d-block">
                This field is required
              </span>
            )}
          </Form.Group>

          <button
            className="btn bg-primary fw-600 me-3 text-white"
            type="submit"
          >
            Send
          </button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default MyModal;
