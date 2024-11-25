import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <nav style={{ width: "100px", background: "#333", color: "#fff", padding: "20px" }}>
            <h2>Café POS</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <NavLink to="/admin/dashboard" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/menu" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Menu Management
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/inventory" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Inventory
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/orders" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/reports/sales" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Reports
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/settings" style={({ isActive }) => ({ color: isActive ? "#4caf50" : "#fff" })}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
