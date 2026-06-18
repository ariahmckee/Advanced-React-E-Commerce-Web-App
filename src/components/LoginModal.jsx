// import { Modal, Button, Form } from "react-bootstrap";
// import { useState } from "react";
// import { useAuth } from "../context/useAuth";
// import ErrorAlert from "./ErrorAlert";

// function LoginModal({ show, onHide }) {
//   const { login } = useAuth();

//   const [creds, setCreds] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     const success = login(creds.username, creds.password);

//     if (!success) {
//       setError("Invalid credentials");
//       return; // 👈 stop closing modal
//     }

//     setError("");
//     onHide();
//   };

//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Admin Login</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form className="d-flex flex-column gap-3">
//           <Form.Control
//             placeholder="Username"
//             onChange={(e) => setCreds({ ...creds, username: e.target.value })}
//           />
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setCreds({ ...creds, password: e.target.value })}
//           />
//         </Form>
//         {error && <ErrorAlert message={error} />}
//       </Modal.Body>

//       <Modal.Footer>
//         <Button onClick={handleSubmit}>Login</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default LoginModal;

import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import ErrorAlert from "./ErrorAlert";
import { useRef } from "react";

function LoginModal({ show, onHide }) {
  const { login } = useAuth();
  const inputRef = useRef();

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // ✅ Reset when modal closes
  useEffect(() => {
    if (show) inputRef.current?.focus();
  }, [show]);

  const handleClose = () => {
    setError("");
    setCreds({ username: "", password: "" });
    onHide();
  };

  const handleSubmit = () => {
    const success = login(creds.username, creds.password);

    if (!success) {
      setError("Invalid credentials");
      return;
    }

    handleClose(); // ✅ ensures clean close
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Admin Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            handleSubmit();
          }}
          className="d-flex flex-column gap-3"
        >
          <Form.Control
            ref={inputRef}
            placeholder="Username"
            value={creds.username}
            onChange={(e) => setCreds({ ...creds, username: e.target.value })}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <div className="d-flex justify-content-end">
            <Button type="submit">Login</Button>
          </div>
        </Form>

        {error && <ErrorAlert message={error} />}
      </Modal.Body>

      {/* <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default LoginModal;
