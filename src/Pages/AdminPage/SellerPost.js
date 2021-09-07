import React, { useState, useEffect } from "react";
import { Alert, Modal, Table } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { deletSellerPost, sellerPost } from "../../Redux/Actions/PostAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSellerAllPost } from "./../../Redux/Actions/PostAction";

const SellerPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [show, setShow] = useState(false);
  const allPostStore = useSelector((state) => state.allPostReducer);
  const dispatch = useDispatch();
  

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getSellerAllPost());
  }, []);

  const onSubmit = (data) => {
    sellerPost(data);
    setShow(false);
    reset();
  };

  const deletPost = (id) => {
    dispatch(deletSellerPost(id));
  };


    //pagination  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
   
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allPostStore?.postList?.slice(indexOfFirstPost, indexOfLastPost);
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPostStore?.postList?.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
  return (
    <div>
      <div>
        <button className="btn btn-danger me-3" onClick={handleShow}>
          Add New Post
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(getSellerAllPost())}
        >
          Reload
        </button>
        {allPostStore.error ? (
          <Alert variant={"danger"} className="mt-5">
            {allPostStore.error}
          </Alert>
        ) : (
          <div className="pt-5">
            {currentPosts.length > 0 ? (
              <Table striped bordered hover className="text-white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => (
                    <tr
                      key={post.name}
                      className="cursor-pointer text-white"
                      onClick={() => deletPost(post._id)}
                    >
                      <td>{post.name}</td>
                      <td>Delet</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant={"danger"}>No Post Found!</Alert>
            )}
          </div>
        )}
        {allPostStore?.postList.length > postsPerPage ? (
          <div className=" pb-3 pt-3">
            <nav>
              <ul className="pagination flex-wrap d-flex justify-content-center">
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className={`page-item cursor-pointer ${
                      number == currentPage ? "active" : ""
                    } `}
                  >
                    <a
                      onClick={() => setCurrentPage(number)}
                      className={`page-link ${
                        number == currentPage ? "bg-danger" : ""
                      } `}
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post for buyer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={`mt-4`} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Work</Form.Label>
              <Form.Control
                type="text"
                placeholder="Work"
                {...register("work", { required: true })}
              />
              {errors.work?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
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
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Date"
                {...register("date", { required: true })}
              />
              {errors.date?.type === "required" && (
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

export default SellerPost;
