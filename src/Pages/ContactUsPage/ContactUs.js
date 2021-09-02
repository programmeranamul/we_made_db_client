import React, { useState } from "react";
import { Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Conatctus.css";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [datas, setDatas] = useState({});

  const conactStore = useSelector((state) => state.conactUsReducer);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  //email send
  function sendEmail(e) {
    console.log(e);
    e.preventDefault();
    if (
      !datas.email ||
      !datas.name ||
      !datas.subject ||
      !datas.message ||
      !datas.cell
    ) {
      setError("Fill up all input.");
    } else {
      setError(null);
      emailjs
        .sendForm(
          "gmail",
          "template_2go8bzg",
          e.target,
          "user_gomIaUvbYfoXvqiEPvlNZ"
        )
        .then(
          (result) => {
            setSuccess("Message Submited SuccessFully");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  const handelChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
    if (
      datas.email ||
      datas.name ||
      datas.subject ||
      datas.message ||
      datas.cell
    ) {
      setError(null);
    }
  };

  return (
    <div className="py-5 conatct-us">
      <div className="container pb-4">
        <div className="col-md-9 col-lg-5 ms-auto border rounded bg-white px-4 py-4">
          <h5 className="mx-auto fw-700 text-sky">Conact Us</h5>
          <Form className="mt-4" onSubmit={sendEmail}>
            {/* <Form className="mt-4" onSubmit={sendEmail}> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Email 
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="cell"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handelChange}
              />
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
                name="message"
                onChange={handelChange}
              />
            </Form.Group>
            {error ? <h5 className="text-danger">{error}</h5> : null}
            <button className="btn bg-orange tw-600 text-white" type="button">
              Submit
              {conactStore.loading && (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              )}
            </button>
            {success ? <h5 className="text-success">{success}</h5> : null}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
