import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Carear = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const carearStore = useSelector((state) => state.carearReducer);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <h5 className="mx-auto fw-700">Carrers:</h5>
        <h6 className="mb-5">
          We will offer exciting career opportunities soon. Whether it's the
          diverse challenges daily within the job or the large scope for
          applying creativity in your work - there are enough reasons to join
          our motivated team.
        </h6>
        <div className="col-md-6 mx-auto border rounded px-4 pb-4 pt-3">
          <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="text-danger mt-2 d-block">
                  Name Must be more then 3 charecter
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                {...register("cell", { required: true, pattern: /^[0-9]/ })}
              />
              {errors.cell?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.cell?.type === "pattern" && (
                <span className="text-danger mt-2 d-block">
                  Please Enter Only Number
                </span>
              )}
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload your resume</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload your resume"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Email
              {carearStore.loading && (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              )}
            </Button>
          </Form>
        </div>
        <p className="text-center mt-3 text-secondary">
          Stay in touch with our recruitment team,{" "}
          <a href="mailto:web@programming-hero.com">career@squarefeetbd.com</a> 
        </p>
      </div>
    </div>
  );
};

export default Carear;
