import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { NotificationProvider } from "./NotificationContext";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <NotificationProvider>{children}</NotificationProvider>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default ContextProvider;
