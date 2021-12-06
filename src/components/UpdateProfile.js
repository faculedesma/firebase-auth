import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const promises = [];

    if (password !== passwordConfirmRef.current.value) {
      setError("Passwords do not match.");
      return;
    }

    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }

    if (password) {
      promises.push(updatePassword(password));
    }

    try {
      await Promise.all(promises);
      navigate("/");
    } catch (e) {
      setError("Failed to update account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100" style={{ maxWidth: 400 }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                defaultValue={currentUser.email}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Leave blank to keep the same"
                type="password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                placeholder="Leave blank to keep the same"
                type="password"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button disable={loading} className="w-100" type="submit">
              {loading ? (
                <Spinner animation="border" variant="info" />
              ) : (
                "Update"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
