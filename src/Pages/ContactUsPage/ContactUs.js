import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Conatctus.css"

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const conactStore = useSelector((state) => state.conactUsReducer);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="py-5 conatct-us">
      <div className="container pb-4">
      <div className="col-md-6 ms-auto border rounded bg-white px-4 py-4">
          <h5 className="mx-auto fw-700">Conact Us</h5>
          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true, minLength: 10 })}
              />
              {errors.subject?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.subject?.type === "minLength" && (
                <span className="text-danger mt-2 d-block">
                  Name Must be more then 10 charecter
                </span>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Message"
                rows={3}
                {...register("message", { required: true, minLength: 30 })}
              />
              {errors.message?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.message?.type === "minLength" && (
                <span className="text-danger mt-2 d-block">
                  Message Must be more then 30 charecter
                </span>
              )}
            </Form.Group>

            <button className="btn bg-orange tw-600 text-white"  type="submit">
              Submit
              {conactStore.loading && (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              )}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
