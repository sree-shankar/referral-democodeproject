import React from "react";
import styled from "styled-components";

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faHeart,
    faCog,
    faPlus,
    faChevronDown,
    faChevronUp,
    faCheck,
    faFileAlt,
    faTimes,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <SidebarContainer>
            <SidebarLink to="/dashboard">
                <SidebarIcon>
                    <FontAwesomeIcon icon={faHome} />
                </SidebarIcon>
                Dashboard
            </SidebarLink>
            <SidebarLink to="/program-management">
                <SidebarIcon>
                    <FontAwesomeIcon icon={faHeart} />
                </SidebarIcon>
                Program Management
            </SidebarLink>
            <SidebarLink to="/setting">
                <SidebarIcon>
                    <FontAwesomeIcon icon={faCog} />
                </SidebarIcon>
                Setting
            </SidebarLink>
            <hr width="80%" />
            {/* 
            <SidebarLink to="/programme-Posted">Programme Posted</SidebarLink> */}

            <DropdownContainer>
                <DropdownHeader onClick={toggleDropdown}>
                    Programme posted
                    <DropdownIcon>
                        <FontAwesomeIcon
                            icon={
                                isDropdownOpen ? faChevronDown : faChevronRight
                            }
                        />
                    </DropdownIcon>
                </DropdownHeader>
                {isDropdownOpen && (
                    <DropdownContent>
                        <SidebarLink to="/programme-Posted">
                            <SidebarIcon>
                                <FontAwesomeIcon icon={faCheck} />
                            </SidebarIcon>
                            Published
                        </SidebarLink>
                        <SidebarLink to="/programme-Draft">
                            <SidebarIcon>
                                <FontAwesomeIcon icon={faFileAlt} />
                            </SidebarIcon>
                            Draft
                        </SidebarLink>
                        <SidebarLink to="/programme-Expired">
                            <SidebarIcon>
                                <FontAwesomeIcon icon={faTimes} />
                            </SidebarIcon>
                            Expired
                        </SidebarLink>
                    </DropdownContent>
                )}
            </DropdownContainer>
            <hr width="80%" />
            <SidebarLink to="/Favourite-Referee">
                {" "}
                Favourite Referee{" "}
                <SidebarIconleft>
                    <FontAwesomeIcon icon={faPlus} />
                </SidebarIconleft>
            </SidebarLink>
            <FooterSection>
                <SidebarLink to="/Invite-new-Referrer">
                    {" "}
                    <SidebarIcon>
                        <FontAwesomeIcon icon={faPlus} />
                    </SidebarIcon>
                    Invite new Referrer
                </SidebarLink>
            </FooterSection>
        </SidebarContainer>
    );
};

export default Sidebar;
const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0056b3;
    color: #fff;
    width: 250px;
    height: 100vh;
`;

const ContentContainer = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: #f5f5f5;
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: inherit;
    text-decoration: none;
    margin: 15px 0; /* Add margin to top and bottom */
    /* margin-left: 30px; */
    padding-left: 40px;
    padding-left: 20px; /* Adjusted padding */
    transition: background-color 0.3s;

    &:hover {
        /* background-color: #42e0f5; */
        background-color: #007bff;
    }
`;
const SidebarIcon = styled.span`
    margin-right: 0.8rem;
`;
const SidebarIconleft = styled.span`
    /* margin-left: 0.8rem; */
    margin-left: auto;
`;
const FooterSection = styled.div`
    margin-top: 180px;
`;
const DropdownContainer = styled.div`
    position: relative;
`;

const DropdownHeader = styled.div`
    /* display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: inherit;
    text-decoration: none;
    margin: 15px 0;
    padding-left: 40px;
    transition: background-color 0.3s;
    cursor: pointer; */
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: inherit;
    text-decoration: none;
    margin: 15px 0; /* Add margin to top and bottom */
    /* margin-left: 30px; */
    padding-left: 40px;
    padding-left: 20px; /* Adjusted padding */
    transition: background-color 0.3s;

    &:hover {
        /* background-color: #42e0f5; */
        background-color: #007bff;
    }
`;

const DropdownIcon = styled.span`
    margin-left: auto;
`;

const DropdownContent = styled.div`
    background-color: #0056b3;
    display: flex;
    flex-direction: column;
    /* padding-left: 40px; */
`;
