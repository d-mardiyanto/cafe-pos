import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={{ background: "#f4f4f4", padding: "10px 20px", borderTop: "1px solid #ddd" }}>
            <p>&copy; {new Date().getFullYear()} Café POS. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
