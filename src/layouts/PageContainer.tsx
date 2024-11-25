import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
const PageContainer = () => {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet /> {/* Render child components (pages) here */}
                </main>
                <Footer />
            </div>
        </div>
    );
}
export default PageContainer;