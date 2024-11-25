import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        login({ username,password });
        navigate("/dashboard");
    };

    return (
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
                            <Form className="pt-3" onSubmit={handleLogin}>
                                <Form.Group className="d-flex search-field">
                                    <Form.Control
                                        type="email"
                                        placeholder="Username"
                                        size="lg"
                                        className="h-auto"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required />
                                </Form.Group>
                                <Form.Group className="d-flex search-field">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        size="lg"
                                        className="h-auto"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </Form.Group>
                                <div className="mt-3">
                                    <Button variant="primary">Login</Button>
                                </div>
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <label className="form-check-label text-muted">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                            Keep me signed in
                                        </label>
                                    </div>
                                    <Link to="/forgot-password" className="auth-link text-black">Forgot Password ?</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
