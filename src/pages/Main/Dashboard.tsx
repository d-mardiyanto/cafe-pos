import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./../../styles/style.css";
import { useAuth } from "../../context/AuthContext";

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Fetch user data on component mount

    return (
        <div style={{ padding: "20px" }}>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <h1>Dashboard</h1>
                <button onClick={logout} style={{ padding: "10px 20px" }}>
                    Logout
                </button>
            </header>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {user ? (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                    <p>You are logged in to the POS system.</p>

                    <section style={{ marginTop: "20px" }}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#orders">Manage Orders</a>
                            </li>
                            <li>
                                <a href="#menu">Update Menu</a>
                            </li>
                            <li>
                                <a href="#inventory">Check Inventory</a>
                            </li>
                        </ul>
                    </section>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;
