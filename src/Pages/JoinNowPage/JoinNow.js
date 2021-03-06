import React, { useRef } from "react";
import "./JoinNow.css";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { applyActivation } from "../../Redux/Actions/BuyerAuthAction";
import { sellerJoinRequest } from "./../../Redux/Actions/SellerAuthAction";

const JoinNow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.buyerAuthReducer);

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  let { type } = useParams();

  const password = useRef({});
  password.current = watch("password", "");

  let location = useLocation();
  let { from } = location.authenticate || { from: { pathname: "/" } };

  const onSubmit = (data) => {
    data.type = type;
    if (type === "Buyer") {
      dispatch(applyActivation(data));
    }
    if (type === "Seller") {
      dispatch(sellerJoinRequest(data));
    }
  };

  if (state.authenticate) {
    if (state.user.type === "Buyer") {
      history.replace("/buyer/1");
    }
    if (state.user.type === "Seller") {
      history.replace("/seller/1");
    }
  }

  return (
    <div
      className={`mt-4 bg-cover ${
        type === "Buyer" ? "buyer_login" : "seller_login"
      } py-5`}
    >
      <div className="container pb-5 pt-3">
        <div
          className={`col-md-6 border rounded px-4 py-4 bg-white ${
            type === "Buyer" ? "ms-auto" : "me-auto"
          }`}
        >
          <h4 className="text-center text-sky join-us-title pb-4">
            Start your journey to meet the {type}
          </h4>
          <Form className={`mt-4`} onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cell Number"
                {...register("cell", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
              />
              {errors.cell?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.cell?.type === "minLength" && (
                <span className="text-danger mt-2 d-block">
                  Enter a valid number
                </span>
              )}
              {errors.cell?.type === "maxLength" && (
                <span className="text-danger mt-2 d-block">
                  Enter a valid number
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
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Profession"
                {...register("profession", { required: true })}
              />
              {errors.profession?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
            {type === "Seller" ? (
              <div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Organization (If job holder)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Organization"
                    {...register("Organization")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Designation"
                    {...register("Designation", { required: true })}
                  />
                  {errors.Designation?.type === "required" && (
                    <span className="text-danger mt-2 d-block">
                      This field is required
                    </span>
                  )}
                </Form.Group>
              </div>
            ) : null}

            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Referral Code"
                {...register("referral")}
              />
              {errors.referral?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 4 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-danger mt-2 d-block">
                  Password Must be more then 3 charecter
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                {...register("confarmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.confarmPassword?.type === "validate" && (
                <span className="text-danger mt-2 d-block">
                  Password or Confarm Password does not matach
                </span>
              )}
              {errors.confarmPassword?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>
            <button className="btn bg-orange fw-600 text-white" type="submit">
              Submit
              {state.loading && (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              )}
            </button>
          </Form>
          {state.error && (
            <Alert className="text-center mt-3" variant={"danger"}>
              {state.error}
            </Alert>
          )}
          {state.actMessage && (
            <Alert className="text-center mt-3" variant={"success"}>
              {state.actMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
