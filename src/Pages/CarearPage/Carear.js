import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Carear.css";
import axios from "axios";

const Carear = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const carearStore = useSelector((state) => state.carearReducer);
  const onSubmit = async (data) => {
    console.log("data", data);
    await axios.post("https://ancient-dawn-67469.herokuapp.com/carrer", data);
    reset();
    alert("We will contact with you.");
  };
  return (
    <div className="carear-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div>
              <h2 className="text-center bg-primary text-white d-inline-block p-2 rounded">
                Careers
              </h2>
              <h6 className="mb-4 bg-orange d-inline-block p-2 rounded text-justify">
                We will offer exciting career opportunities soon. Whether it's
                the diverse challenges daily within the job or the large scope
                for applying creativity in your work. There are enough reasons
                to join our motivated team.
              </h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mx-auto border rounded px-4 pb-4 pt-3 bg-white">
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Cell</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
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

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Resume</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Resume Link"
                    {...register("resume", { required: true })}
                  />
                  {errors.resume?.type === "required" && (
                    <span className="text-danger mt-2 d-block">
                      This field is required
                    </span>
                  )}
                </Form.Group>

                <button
                  className="btn bg-orange tw-600 text-white mt-2"
                  type="submit"
                >
                  Send Email
                  {carearStore.loading && (
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  )}
                </button>
              </Form>
              <p className="text-center mt-3 text-secondary">
                Stay in touch with our recruitment team,{" "}
                <a href="mailto:web@programming-hero.com">
                  career@squarefeetbd.com
                </a>{" "}
                 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carear;
