import React from "react";
import styled from "styled-components";
import {
    AiOutlineUser,
    AiOutlineEye,
    AiOutlineShareAlt,
    AiOutlineDollar,
    AiOutlinePlus,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { FaPlus, FaUser, FaRegTimesCircle } from "react-icons/fa";
import { MdPersonAdd, MdPerson } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddMemberModal from "./addmembermodal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Avatar from "@mui/material/Avatar";

const DashboardPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [dataList, setDataList] = useState(null);
    const [editList, setEditList] = useState(null);
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false); // State for modal visibility
    const [isLoading, setIsLoading] = useState(true); // State to track loading
    const [selectedProfile, setSelectedProfile] = useState(null);

    // const handleAddProfile = () => {
    //     const newProfile = {
    //         id: Date.now(),
    //         name: `Profile ${profiles.length + 1}`,
    //     };

    //     setProfiles([...profiles, newProfile]);
    // };

    const getCustomerData = () => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails, "in conditions");
        // let list = {};
        setDataList([userDetails]);
        setEditList([userDetails]);
        // setSelectedCustomerData(userDetails.data.programs);
        console.log(dataList, "customerList");
        console.log(editList, "editlist");
    };
    useEffect(() => {
        console.log("datalist ");
        getCustomerData();
    }, []);

    const handleAddProfile = () => {
        setIsAddMemberModalOpen(true); // Open the add member modal
    };

    // const handleAddMember = (memberName) => {
    //     const newProfile = {
    //         id: Date.now(),
    //         name: memberName,
    //         image: "profile.jpg", // Add a default image here
    //     };
    //     // setProfiles([...profiles, newProfile]);

    //     const updatedProfiles = [...profiles, newProfile];
    //     setProfiles(updatedProfiles);

    //     // Update local storage with the new list of profiles
    //     localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));

    //     toast.success("Member added successfully!", {
    //         position: "top-right",
    //         autoClose: 1000, // You can adjust the time the notification stays on the screen (in milliseconds)
    //     });
    // };

    const handleAddMember = (memberData) => {
        const newProfile = {
            id: Date.now(),
            name: memberData.memberName,
            date: memberData.date,
            place: memberData.place,
            referred: memberData.referred,
            shared: memberData.shared,
            claimed: memberData.claimed,
            levelScore: memberData.levelScore,
            firstLevel: memberData.firstLevel,
            secondLevel: memberData.secondLevel,

            // Add other properties from memberData as needed
        };

        // Update profiles state
        const updatedProfiles = [...profiles, newProfile];
        setProfiles(updatedProfiles);

        // Update local storage with the new list of profiles
        localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));

        toast.success("Member added successfully!", {
            position: "top-right",
            autoClose: 1000,
        });
    };

    useEffect(() => {
        // Load profiles from local storage
        const storedProfiles = JSON.parse(localStorage.getItem("userProfiles"));

        if (storedProfiles) {
            setProfiles(storedProfiles);
        }
        const fetchData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated delay of 2 seconds
        };

        fetchData();
    }, []);

    const handleRemoveProfile = (profileId) => {
        const updatedProfiles = profiles.filter(
            (profile) => profile.id !== profileId
        );
        setProfiles(updatedProfiles);

        // Update local storage with the updated list of profiles
        localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));
    };

    const handleAddProfileClick = (profile) => {
        setSelectedProfile(profile);
        localStorage.setItem("selectedProfile", JSON.stringify(profile));
    };
    return (
        <DashboardContainer>
            {isLoading ? (
                <Skeleton width={750} height={50} /> // Show skeleton while loading
            ) : (
                <CardContainer>
                    <Row>
                        <ProfileListContainer>
                            <AddProfileIcon onClick={handleAddProfile}>
                                <MdPersonAdd size={50} />
                            </AddProfileIcon>
                            {profiles.map((profile) => (
                                <ProfileListItem key={profile.id}>
                                    {/* <FaUser size={20} /> */}
                                    <Removecontent
                                        onClick={() =>
                                            handleRemoveProfile(profile.id)
                                        }
                                    >
                                        <FaRegTimesCircle size={15} />
                                    </Removecontent>
                                    {/* <AddProfile
                                        src="profile.jpg"
                                        alt="Profile Picture"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            handleAddProfileClick(profile)
                                        }
                                    /> */}
                                    <Avatar
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: "#3f51b5",
                                            cursor: "pointer",
                                        }}
                                        onClick={() =>
                                            handleAddProfileClick(profile)
                                        }
                                    >
                                        {profile.name[0]}
                                    </Avatar>
                                    <ProfileName>{profile.name}</ProfileName>
                                </ProfileListItem>
                            ))}
                        </ProfileListContainer>
                    </Row>
                </CardContainer>
            )}
            <Label>30 days performance</Label>
            <>
                {dataList &&
                    dataList.map((listdata) => (
                        <Row>
                            {isLoading ? (
                                <Skeleton width={220} height={20} /> // Show skeleton while loading
                            ) : (
                                <Card>
                                    <CardData>
                                        <CardTitle>Referrer</CardTitle>
                                        <CardData>
                                            {listdata.data.referrer}
                                        </CardData>
                                    </CardData>

                                    <Icon>
                                        <AiOutlineEye />
                                    </Icon>
                                </Card>
                            )}
                            {isLoading ? (
                                <Skeleton width={220} height={20} /> // Show skeleton while loading
                            ) : (
                                <Card>
                                    <CardData>
                                        <CardTitle>Shared</CardTitle>
                                        <CardData>
                                            {listdata.data.shared}
                                        </CardData>
                                    </CardData>
                                    <Icon>
                                        <AiOutlineShareAlt />
                                    </Icon>
                                </Card>
                            )}
                            {isLoading ? (
                                <Skeleton width={220} height={20} /> // Show skeleton while loading
                            ) : (
                                <Card>
                                    <CardData>
                                        <CardTitle>Distributed</CardTitle>
                                        <CardData>
                                            {listdata.data.distributed}
                                        </CardData>
                                    </CardData>
                                    <Icon>
                                        <AiOutlineDollar />
                                    </Icon>
                                </Card>
                            )}
                        </Row>
                    ))}
            </>
            <Labels>Last Edited</Labels>

            {editList &&
                editList.map((editlistdata) => (
                    <>
                        {isLoading ? (
                            <Skeleton width={750} height={50} /> // Show skeleton while loading
                        ) : (
                            <Cards>
                                <Column>
                                    <Rows>
                                        <Column>
                                            <Heading>Multi-Level Units</Heading>
                                            <Description>
                                                {
                                                    editlistdata.data
                                                        .editdscription
                                                }
                                            </Description>
                                        </Column>
                                    </Rows>
                                </Column>
                                {editlistdata.data.tablelist.map((editdata) => (
                                    <>
                                        <MemberStatsContainer>
                                            <ProfilePicture>
                                                {/* <FaUser size={50} /> */}
                                                <Profileset
                                                    src="profile.jpg"
                                                    alt="Profile Picture"
                                                />
                                            </ProfilePicture>
                                            <StatSection>
                                                <span>{editdata.name}</span>
                                                &nbsp;
                                                <span>
                                                    {editdata.dateplace}
                                                </span>
                                            </StatSection>
                                            <StatSection>
                                                <span>{editdata.price}</span>
                                                &nbsp;
                                                <span>Paid to you</span>
                                            </StatSection>
                                            <StatSection>
                                                <span>{editdata.level1}</span>
                                                &nbsp;
                                                <span>{editdata.levels}</span>
                                            </StatSection>
                                            <StatSection>
                                                <span>{editdata.level2}</span>
                                                &nbsp;
                                                <span>{editdata.levels}</span>
                                            </StatSection>
                                        </MemberStatsContainer>
                                        <HrLine />
                                    </>
                                ))}
                            </Cards>
                        )}
                    </>
                ))}

            {isAddMemberModalOpen && (
                <AddMemberModal
                    onClose={() => setIsAddMemberModalOpen(false)}
                    onAddMember={handleAddMember}
                />
            )}
            <ToastContainer />
        </DashboardContainer>
    );
};

export default DashboardPage;

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

const CardContainer = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    padding: 15px; */
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    /* max-width: 96%; Set your desired max width */
    min-width: 950px; /* Set your desired max width */
    margin: 0 auto; /* Center the container */
    overflow-x: scroll ; /* Enable horizontal scrolling */

       /* Scrollbar styles */
       ::-webkit-scrollbar {
        height: 8px; /* Set the height of the horizontal scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; /* Optional: set the track background color */
    }

    ::-webkit-scrollbar-thumb {
        background: blue; /* Set the color of the scrollbar thumb */
        border-radius: 4px; /* Optional: set border radius for rounded corners */
    }

    ::-webkit-scrollbar-thumb:hover {
        background: darkblue; /* Optional: change color when hovered */
    }

    /* Firefox scrollbar styles */
    scrollbar-width: thin; /* Set the scrollbar width */
    scrollbar-color: blue #f1f1f1; /* Set the thumb and track color */
`;

// const ProfileIcon = styled(AiOutlineUser)`
//     font-size: 24px;
// `;

const Listard = styled.div`
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
`;

const Label = styled.label`
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 45px; */
`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #0099ff;
    color: white;
    border-radius: 8px;
    width: 210px;
`;

const CardTitle = styled.div`
    font-weight: bold;
`;

const CardData = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
`;

const Icon = styled.div`
    font-size: 34px;
`;

const ProfileListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    width: 80vh; /* Ensure minimum width to accommodate 10 cards */
`;

const ProfileIcon = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const ProfileListItem = styled.div`
    display: flex;
    align-items: center;
    /* margin-top: 5px; */
    flex-direction: column; /* Arrange icon and name vertically */
`;

const ProfileName = styled.div`
    margin-left: 5px;
`;

const AddProfileIcon = styled(ProfileIcon)`
    color: #0056b3;
    &:hover {
        color: #007bff;
    }
`;

const Cards = styled.div`
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
    padding: 20px;
    width: 96%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Rows = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Labels = styled.div`
    font-weight: bold;
`;

const Heading = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const Description = styled.div`
    font-size: 14px;
`;
const FooterCard = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const ProfilePicture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #f0f0f0;
    color: #666666;
    border-radius: 50%;
   
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    /* justify-content: space-between; */
    /* margin-left: 10px; */
`;

const Name = styled.div`
    font-weight: bold;
`;

const Amount = styled.div`
    font-size: 14px;
`;

const Level = styled.div`
    font-size: 12px;
    color: #888888;
`;
const HrLine = styled.hr`
    border: none;
    border-top: 1px solid #0099ff; /* Set your desired color here */
    margin: 15px 0;
`;
const MemberStatsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    align-items: center;
`;
const StatSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:80px;
`;
const Cardedit = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    overflow: hidden;
    background-color: #ffffff;
`;
const SkeletonContainer = styled.div`
    width: 30%;
    height: 30px; /* Adjust the height as needed */
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
`;
const Profileset = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;
const AddProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Removecontent = styled.div`
    /* background-color: #ff0000; Choose your desired color */
    background-color: transparent;

    color: #333537; /* Choose your desired text color */
    border: none;
    /* padding: 5px 10px; */
    cursor: pointer;
    margin-left: 30px; /* Adjust the margin as needed */
    margin-bottom: -10px;
`;
