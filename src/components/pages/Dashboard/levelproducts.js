import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

const Levelcomponent = () => {
    const [isLoading, setIsLoading] = useState(true); // State to track loading
    const [selectedProfile, setSelectedProfile] = useState(null);

    const navigate = useNavigate();

    const Naviatepages = () => {
        navigate("/Referral-details");
    };
    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated delay of 2 seconds
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Retrieve the selected profile from local storage
        const storedSelectedProfile = JSON.parse(
            localStorage.getItem("selectedProfile")
        );

        if (storedSelectedProfile) {
            setSelectedProfile(storedSelectedProfile);
        }
    }, []);
    return (
        <CardContainer>
            {isLoading ? (
                <Skeleton width={350} height={350} /> // Show skeleton while loading
            ) : (
                <>
                    {selectedProfile && (
                        <Card>
                            <TopSection>
                                {/* <ProfilePicture
                                    src="profile.jpg"
                                    alt="Profile Picture"
                                /> */}
                                <Avatar
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: "#3f51b5",
                                        cursor: "pointer",
                                    }}
                                >
                                    {selectedProfile.name[0]}
                                </Avatar>
                                <Content>{selectedProfile.name}</Content>
                                <Content>
                                    {selectedProfile.date}&nbsp;|&nbsp;
                                    {selectedProfile.place}
                                </Content>

                                <MemberStatsContainer>
                                    <StatSection>
                                        <span>Referred</span>&nbsp;
                                        <span>{selectedProfile.referred}</span>
                                    </StatSection>
                                    <StatSection>
                                        <span>Shared</span>&nbsp;
                                        <span>{selectedProfile.shared}</span>
                                    </StatSection>
                                    <StatSection>
                                        <span>Claimed</span>&nbsp;
                                        <span>{selectedProfile.claimed}</span>
                                    </StatSection>
                                </MemberStatsContainer>
                            </TopSection>
                            <Boxcontainer>
                                <Boxcontent>
                                    <CardBox>
                                        <span>
                                            {selectedProfile.levelScore}
                                        </span>
                                        {selectedProfile.firstLevel}
                                    </CardBox>
                                </Boxcontent>
                                <Boxcontent>
                                    <CardBox>
                                        <span>
                                            {selectedProfile.levelScore}
                                        </span>
                                        {selectedProfile.secondLevel}
                                    </CardBox>
                                </Boxcontent>
                            </Boxcontainer>
                            <ViewButton onClick={Naviatepages}>
                                View Profile
                            </ViewButton>
                            <Heading>Products Purchased</Heading>
                            <ImageCards>
                                <Row>
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                </Row>

                                <Row>
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                </Row>

                                <Row>
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                    <RoundProfilePicture
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                    />
                                </Row>
                            </ImageCards>
                        </Card>
                    )}
                </>
            )}
        </CardContainer>
    );
};

export default Levelcomponent;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 450px;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const Content = styled.div`
    margin-top: 10px;
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const CardBox = styled.div`
    width: 150px;
    height: 100px;
    background-color: #0099ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    border-radius: 10px;
`;

const RoundProfilePicture = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 55px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.h2`
    margin-top: 20px;
    font-size: 20px;
`;

const Card = styled.div`
    width: 90%;
    /* height: 60vh; */
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 30px;
    /* display: flex; */
`;
const Boxcontent = styled.div`
    /* display: flex;
    flex-direction: row;
    gap: 10px;  */
`;
const MemberStatsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    align-items: center;
    gap: 50px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StatSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageCards = styled.div`
    /* background-color: #ffffff;
    border: 1px solid #ccc; */
    /* border-radius: 8px; */
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
    /* padding: 20px;
    width: 96%; */

    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align horizontally */
    text-align: center; /* Center align the content */
    gap: 50px; /* Adding vertical gap between the rows */
    justify-content: space-between;
    align-content: space-around;
`;

const Boxcontainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    /* gap: 45px; */
    justify-content: space-around;
`;
const ViewButton = styled.button`
    /* margin-top: 10px; */
    background-color: #0056b3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center; /* Center align the button text */
    width: 100%; /* Increase the button width as desired */
    &:hover {
        background-color: #007bff;
    }
`;
