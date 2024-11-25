import React from "react";
import { useNotification } from "../context/NotificationContext";

const NotificationList: React.FC = () => {
    const { notifications, removeNotification } = useNotification();

    return (
        <div style={{ position: "fixed", top: 10, right: 10 }}>
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    style={{
                        marginBottom: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: notification.type === "success" ? "green" : notification.type === "error" ? "red" : "blue",
                        color: "#fff",
                    }}
                >
                    <p>{notification.message}</p>
                    <button onClick={() => removeNotification(notification.id)} style={{ marginLeft: "10px", color: "#fff", background: "transparent", border: "none" }}>
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NotificationList;
