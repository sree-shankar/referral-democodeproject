import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const TopNavbarComponent = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("");

    const handleLogout = () => {
        // Perform logout logic here
        // Remove the token from localStorage to log the user out
        localStorage.removeItem("token");
        localStorage.removeItem("userDetails");
        // localStorage.removeItem("programFormData");
        localStorage.removeItem("publishedPosts");
        // localStorage.removeItem("userProfiles");

        // Redirect to login page
        navigate("/login");
    };

    const handleUserTypeToggle = () => {
        let user = JSON.parse(localStorage.getItem("userDetails"));
        console.log(user, "user");
        setUserType(user.username);
        console.log(userType, "yype");
    };
    useEffect(() => {
        handleUserTypeToggle();
    }, []);
    return (
        <TopNavbar>
            {/* <Sidebar /> */}
            <CompanyTitle>
                HCEL <br />
                <ReferralPlatform> Referral Platform</ReferralPlatform>
            </CompanyTitle>

            <ProfileDropdown>
                <ProfileDropdownButton onClick={handleUserTypeToggle}>
                    {userType} <DropdownIcon>▼</DropdownIcon>
                </ProfileDropdownButton>
                <ProfileDropdownContent>
                    <ProfileDropdownItem onClick={handleLogout}>
                        {" "}
                        Logout
                    </ProfileDropdownItem>
                </ProfileDropdownContent>
            </ProfileDropdown>
        </TopNavbar>
    );
};

export default TopNavbarComponent;

const TopNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #003d80;
    color: #fff;
    padding: 0.5rem 1rem; /* Adjust the padding as needed */
`;

const CompanyTitle = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const ProfileDropdown = styled.div`
    position: relative;
`;

const ProfileDropdownButton = styled.button`
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
`;

const ProfileDropdownContent = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: none;

    ${ProfileDropdown}:hover & {
        display: block;
    }
`;

const ProfileDropdownItem = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

const DropdownIcon = styled.span`
    margin-left: 0.5rem;
`;

const LogoutButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`;
const ReferralPlatform = styled.span`
    font-size: 1rem; /* Adjust the font size as needed */
`;
