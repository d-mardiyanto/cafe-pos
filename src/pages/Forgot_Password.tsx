import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Form, FormControl } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";

const ForgotPassword: React.FC = () =>{
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const handleResetRequest = () => {

    }

    return(
        <div>
            <div className="d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div className="brand-logo">
                                <img src={require("../assets/Logo.png")} alt="logo" />
                            </div>
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <Form className="pt-3">
                                <Form.Group className="d-flex search-field">
                                    <Form.Control
                                        type="email"
                                        placeholder="Registered Email"
                                        size="lg"
                                        className="h-auto"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </Form.Group>
                                <div className="mt-3">
                                    <Button onClick={handleResetRequest} variant="primary">Send Reset</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword;