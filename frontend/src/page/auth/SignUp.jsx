import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileUser, registerUser } from "../../redux/userAction";

function SignUp() {
    const [name, setName] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(profileUser());
            navigate("/");
        }
    }, [isLoggedIn, navigate, dispatch]);

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        else if (name.length < 4)
            newErrors.name = "Name must be at least 4 characters";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email))
            newErrors.email = "Email is invalid";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (!confirmationPassword)
            newErrors.confirmationPassword =
                "Confirmation password is required";
        else if (confirmationPassword !== password)
            newErrors.confirmationPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            dispatch(
                registerUser({
                    name,
                    email,
                    password,
                    password_confirmation: confirmationPassword,
                })
            );
        }
    };

    return (
        <div
            className="login-wrapper d-flex align-items-center justify-content-center "
            style={{ width: "100%",height:"100%" }}
        >
            <div
                className="login-form-container p-4 shadow rounded"
                style={{ height: "70vh",maxWidth:"400px",width:"100%" }}
            >
                <h2 className="login-title text-center">Register</h2>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmationPassword"
                    >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmationPassword}
                            onChange={(e) =>
                                setConfirmationPassword(e.target.value)
                            }
                            isInvalid={!!errors.confirmationPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.confirmationPassword}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="login-button w-100"
                    >
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
