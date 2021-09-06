import React, { useRef } from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewAdmin } from "../../Redux/Actions/AdminAction";
import { getAllUser } from './../../Redux/Actions/AdminAction';
import { useHistory } from 'react-router-dom';

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const history = useHistory()

  const AdminStore = useSelector((state) => state.adminStore);
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data );
    dispatch(addNewAdmin(data));
  };


  if(AdminStore.success){
    dispatch(getAllUser())
    history.replace("/admin/v8/lk/mk/list/admin")
  }

  return (
    <div>
      <div className="container text-black pb-5 pt-3">
        <div className={`col-md-8 border rounded px-4 py-4 bg-white mx-auto`}>
          <h4 className="text-center text-sky join-us-title pb-4">
            Add new admin
          </h4>
          <Form className={`mt-4`} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Name</Form.Label>
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
                type="text"
                placeholder="Cell Number"
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
              <Form.Label>
                Email
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value="admin"
                readOnly
                placeholder="Enter Profession"
                {...register("type", { required: true })}
              />
              {errors.profession?.type === "required" && (
                <span className="text-danger mt-2 d-block">
                  This field is required
                </span>
              )}
            </Form.Group>       

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
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
                  Name Must be more then 3 charecter
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
              {AdminStore.loading && (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              )}
            </button>
          </Form>
          {AdminStore.error && (
            <Alert className="text-center mt-3" variant={"danger"}>
              {AdminStore.error}
            </Alert>
          )}          
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
