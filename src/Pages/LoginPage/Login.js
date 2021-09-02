import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import { login } from "../../Redux/Actions/BuyerAuthAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (buyerAutyh.authenticate && buyerAutyh.user.type === "Buyer") {
    history.replace("/buyer/1");
  }
  if (buyerAutyh.authenticate && buyerAutyh.user.type === "Seller") {
    history.replace("/seller/1");
  }
  if (buyerAutyh.authenticate && buyerAutyh.user.type === "admin") {
    history.replace("admin");
  }

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <div className="login-conatiner -mb50px">
      <div className="container">
        <div className="row">
          <div className="col-md-5 border p-4 me-auto border rounded bg-light">
            <h4 className="text-center join-us-title pb-4 text-sky">
              Welcome to touch your dream
            </h4>
            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
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
                    Name Must be more then 3 charecter
                  </span>
                )}
              </Form.Group>

              <button className="btn bg-orange fw-600 text-white"  type="submit">
                Login{"  "}
                {buyerAutyh.loading && (
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                )}
              </button>
            </Form>
            {buyerAutyh.error && (
              <Alert className="text-center mt-3" variant={"danger"}>
                {buyerAutyh.error}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
