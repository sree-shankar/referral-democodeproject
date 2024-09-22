import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [invalidError, setInvalidError] = useState("");
    const navigate = useNavigate();

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     navigate("/dashboard");
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the username and password fields before login
        let isValid = true;

        if (username.trim() === "") {
            setUsernameError("Username is required");
            isValid = false;
        } else {
            setUsernameError("");
        }

        if (password === "") {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (isValid) {
            try {
                // Send login credentials to the backend server
                const response = await axios.get(
                    "assets/dummyjson/dummydata.json",
                    {
                        username,
                        password,
                    }
                );
                // Assuming the backend returns user data after successful login
                const userIsPresent = response.data.user.find(
                    (e) => e.username === username && e.password === password
                );
                console.log(userIsPresent, "#### userIsPresent");
                console.log("Token", response.data.user);
                const token = "jasgdjhgasjdvsjdjhsfdjhvdsjfv";

                if (userIsPresent) {
                    // localStorage.setItem("userRole", userIsPresent.role);
                    // localStorage.setItem(
                    //     "userCompany",
                    //     userIsPresent.data.companyName
                    // );

                    localStorage.setItem(
                        "userDetails",
                        JSON.stringify(userIsPresent)
                    );
                    // const { token } = response.data.user;

                    // // Store the token in localStorage to indicate the user is logged in
                    // localStorage.setItem("token", token);
                    // console.log("Token before storage:", token);

                    // // Navigate to the dashboard after successful login
                    // navigate("/dashboard");

                    // Store the token in localStorage to indicate the user is logged in
                    localStorage.setItem("token", token);

                    // Navigate to the dashboard after successful login
                    navigate("/dashboard");
                } else {
                    // Handle login error (e.g., show an error message)
                    setInvalidError("Invalid credentials");
                }
            } catch (error) {
                // Handle any errors that occur during the login process
                console.error("Login error:", error);
                setInvalidError("Login failed. Please try again later.");
            }
        }
    };
    return (
        <BackgroundImage>
            <Container>
                <LoginCard onSubmit={handleSubmit}>
                    <ProfileLogo icon={faUser} />
                    <Title>Login into your account</Title>
                    <Form onSubmit={handleSubmit}>
                        <InputLabel>Username</InputLabel>

                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameError && (
                            <ErrorText>{usernameError}</ErrorText>
                        )}
                        <InputLabel>Password</InputLabel>
                        <Input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <PasswordToggle onClick={handleTogglePassword}>
                            <FontAwesomeIcon
                                icon={showPassword ? faEye : faEyeSlash}
                            />
                        </PasswordToggle>

                        {passwordError && (
                            <PassErrorText>{passwordError}</PassErrorText>
                        )}

                        <ForgotPasswordLink href="#">
                            Forgot Password?
                        </ForgotPasswordLink>
                        <LoginButton type="submit">Login</LoginButton>
                        {invalidError && <ErrorText>{invalidError}</ErrorText>}
                    </Form>
                </LoginCard>
            </Container>
        </BackgroundImage>
    );
};
export default LoginPage;

const Container = styled.div`
    display: flex;
    justify-content: flex-end; /* Align items to the right */
    align-items: center; /* Align items to the top */
    height: 100vh;
    margin-right: 100px; /* Margin on the right side */
    padding-top: 20px; /* Added padding for top spacing */
`;

const BackgroundImage = styled.div`
    /* Set your background image properties here */
    background-image: url("/Referral-Your-Campaigns.png");
    background-size: cover; /* Adjust background size */
`;

const LoginCard = styled.div`
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    background-color: #ffffff;
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out; /* Add transition effect */

    &:hover {
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3); /* Modify box shadow on hover */
    }
`;

// const ProfileLogo = styled.div`
//     /* Set your profile logo styling here */
//     width: 100px;
//     height: 100px;
//     background-color: #ccc;
//     /* margin-top: 10px; */
//     border-radius: 50%;
//     align-items: center;
//     justify-content: center;
//     margin: 10px auto; /* Center the logo horizontally */
//     border-radius: 50%;
//     /* display: flex;
//     align-items: center;
//     justify-content: center; */
// `;

const ProfileLogo = styled(FontAwesomeIcon)`
    /* Set your profile logo styling here */
    color: #4f50e4;
    width: 100px;
    height: 100px;
    /* background-color: #ccc; */
    /* margin-top: 10px; */
    /* border-radius: 50%; */
    align-items: center;
    justify-content: center;
    margin: 10px auto; /* Center the logo horizontally */
    /* border-radius: 50%; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
`;

const Title = styled.h2`
    margin-top: 0;
    color: #4f50e4;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputLabel = styled.label`
    margin-top: 15px;
    text-align: left;
`;

const Input = styled.input`
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* outline: 1px solid #4f50e4; */
    outline: none;
    &:hover {
        border: 1px solid #4f50e4; /* Change color on hover */
    }
`;

const ForgotPasswordLink = styled.a`
    margin-top: 5px;
    /* color: #888; */
    color: #4f50e4;
    text-decoration: none;
    align-self: flex-end;
`;

const LoginButton = styled.button`
    background-color: #4f50e4;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        /* Define hover styles here */
        background-color: #007bff;
        /* color: black; */
    }
`;
const PasswordToggle = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto; /* Adjust position */
    outline: none;
    position: relative;

    bottom: 25px;
    /* right: -10px; Adjust horizontal position */
    &:hover {
        color: #4f50e4; /* Change color on hover */
    }
`;
const ErrorText = styled.p`
    color: red;
    margin: auto;
`;
const PassErrorText = styled.p`
    color: red;
    margin-top: -20px;
`;
