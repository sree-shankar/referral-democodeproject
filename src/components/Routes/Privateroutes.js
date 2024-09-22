// // AuthContext.js

// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//     const [authenticated, setAuthenticated] = useState(false);

//     const login = () => {
//         // Implement your authentication logic here
//         // For example, you can use localStorage, cookies, or JWT for authentication
//         // If authentication is successful, setAuthenticated(true)
//         setAuthenticated(true);
//     };

//     const logout = () => {
//         // Implement logout logic here
//         // Clear authentication tokens or data
//         setAuthenticated(false);
//     };

//     return (
//         <AuthContext.Provider value={{ authenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
