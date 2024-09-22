import React from "react";
import styled from "styled-components";

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch,
    Navigate,
} from "react-router-dom";
import TopNavbarComponent from "../Topnavbar/Topbar";
import Sidebar from "../Topnavbar/Sidebar";
import DashboardContent from "../pages/Dashboard";
import ProgrammeManagement from "../pages/progamme_management/programmanage";
import Createprogram from "../pages/create_programme/createprogram";
import Referraldetails from "../pages/Referal_details/referraldetails";
import { useNavigate } from "react-router-dom";
import Publishedpost from "../pages/create_programme/publishedpost";
import IndexedDBExample from "../pages/Referal_details/treeview";

const ProctectedRoutes = () => {
    const token = localStorage.getItem("token");
    console.log("Retrieved token:", token);

    const navigate = useNavigate();

    if (!token) {
        console.log("No token here");
        // User is not authenticated, redirect to login
        navigate("/login");
        return null;
    }
    return (
        <>
            {/* <TopNavbarComponent /> */}
            <Container>
                <Sidebar />
                <ScrollableContent>
                    <ContentContainer>
                        <Routes>
                            {/* <Route path="/" element={<Dashboard />} /> */}
                            <Route
                                path="/dashboard"
                                element={<DashboardContent />}
                            />
                            <Route
                                path="/program-management"
                                element={<ProgrammeManagement />}
                            />
                            <Route
                                path="/create-program"
                                element={<Createprogram />}
                            />
                            <Route
                                path="/Referral-details"
                                element={<Referraldetails />}
                            />
                            <Route
                                path="/programme-Posted"
                                element={<Publishedpost />}
                            />
                              <Route
                                path="/programme-Draft"
                                element={<IndexedDBExample />}
                            />
                        </Routes>
                    </ContentContainer>
                </ScrollableContent>
            </Container>
        </>
    );
};

export default ProctectedRoutes;
const Container = styled.div`
    display: flex;
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #6f5cc4;
    color: #fff;
    width: 230px;
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

    &:hover {
        background-color: #7e6cca;
    }
`;

const DashboardContainer = styled.div`
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const SidebarIcon = styled.span`
    margin-right: 0.5rem;
`;
const ScrollableContent = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: #f5f5f5;
    /* Enable scrolling */
    overflow-y: auto;
    /* Set a maximum height for the content area, adjust as needed */
    max-height: calc(100vh - 64px); /* 64px is the height of the top navbar */
`;
