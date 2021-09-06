import React, { useState, useEffect } from "react";
import { Button, Form, Alert, Modal, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { buyerPost, deletBuyerPost, getAllBuyerPost } from "./../../Redux/Actions/PostAction";
import { useDispatch , useSelector} from "react-redux";

const BuyerPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const allBuyerPostStore = useSelector((state) => state.allBuyerPostStore);

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    buyerPost(data);
    setShow(false);
    reset();
  };
  useEffect(() => {
    dispatch(getAllBuyerPost());
  }, []);

  const deletPost = (id) => {
    dispatch(deletBuyerPost(id));
  };

  return (
    <div>
      <div>
      <button className="btn btn-danger me-3" onClick={handleShow}>
        Add New Post
      </button>
      <button
          className="btn btn-danger"
          onClick={() => dispatch(getAllBuyerPost())}
        >
          Reload
        </button>
      </div>

      {allBuyerPostStore.error ? (
        <Alert variant={"danger"} className="mt-5">
          {allBuyerPostStore.error}
        </Alert>
      ) : (
        <div className="pt-5">
          {allBuyerPostStore?.postList.length > 0 ? (
            <Table striped bordered hover className="text-white">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Size</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allBuyerPostStore?.postList.map((post, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer text-white"
                   onClick={() => deletPost(post._id)}
                  >
                    <td>{post.location}</td>
                    <td>{post.size}</td>
                    <td>Delet</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : <Alert variant={"danger"}>No Post Found!</Alert>}
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post for buyer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={`mt-4`} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
              />
              {errors.location?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="size"
                {...register("size", { required: true })}
              />
              {errors.size?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Upload a image"
                {...register("image", { required: true })}
              />
              {errors.image?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>

            <button className="btn bg-orange fw-600 text-white" type="submit">
              Post
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BuyerPost;
