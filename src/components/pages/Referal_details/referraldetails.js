import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Rewardpaymentmodal from "./rewardpaymentmodal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ReferralPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [dataList, setDataList] = useState(null);
    // const [selectedReferralData, setSelectedReferralData] = useState(null);
    const [selectedReferralData, setSelectedReferralData] = useState([]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleRewardButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const getCustomerData = () => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails, "in conditions");

        if (userDetails?.data?.referraldetails) {
            // Map over all programs and their layer configurations
            const list = userDetails.data.referraldetails.map((program) => {
                const layerconfig = program.layers?.referraldata;
                return {
                    name: program.name,
                    count: program.count,
                    price: program.price,
                    member: program.member,
                    layerconfig: layerconfig,
                };
            });
            // setListdata(list);
            setDataList(list);
        } else {
            // setListdata([]);
            setDataList([]);
        }
        // let list = {};
        // setDataList([userDetails]);
        // setSelectedCustomerData(userDetails.data.programs);
        console.log(dataList, "referaal list");
        // setDataList(userDetails.data.referraldetails);
    };
    useEffect(() => {
        console.log("referaal list");
        getCustomerData();
    }, []);

    // const handleLayerClick = (referralData) => {
    //     setSelectedReferralData(
    //         referralData === selectedReferralData ? null : referralData
    //     );
    // };
    const handleLayerClick = (referralData) => {
        setSelectedReferralData((prevSelectedReferralData) => {
            // Check if the clicked referral data is already selected
            if (prevSelectedReferralData.includes(referralData)) {
                // If it's selected, remove it from the array to close the layer
                return prevSelectedReferralData.filter(
                    (item) => item !== referralData
                );
            } else {
                // If it's not selected, add it to the array to open the layer
                return [...prevSelectedReferralData, referralData];
            }
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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
        <Container>
            <>
                {selectedProfile && (
                    <Card>
                        <TopSection>
                            <ProfilePicture
                                src="/profile.jpg"
                                alt="Profile Picture"
                            />
                            <ProfileInfo>
                                <Name>{selectedProfile.name}</Name>
                                <ContactInfo>
                                    <p>DOB: 02/7/1991</p>
                                    <p>Mobile Number: +91 989512345</p>
                                    <p>Email id: shakir@gmail.com</p>
                                </ContactInfo>
                            </ProfileInfo>
                            <div>
                                <RewardButton onClick={handleRewardButtonClick}>
                                    Rewards
                                </RewardButton>
                                <MessageButton>Message</MessageButton>
                            </div>
                        </TopSection>

                        <DropdownContainer>
                            <DropdownLabel onClick={toggleDropdown}>
                                Linked Multi-level Members
                            </DropdownLabel>
                            {/* <Dropdown>Add your dropdown options here</Dropdown> */}
                            <DropdownToggle onClick={toggleDropdown}>
                                {isDropdownOpen ? (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )}
                            </DropdownToggle>
                        </DropdownContainer>
                        {isDropdownOpen && (
                            <MemberStatsContainer>
                                <StatSection>
                                    <span>Referrer Member</span>&nbsp;
                                    <span>31 July 2023 | Bangalore</span>
                                </StatSection>
                                <StatSection>
                                    <span>Referred</span>&nbsp;
                                    <span>126</span>
                                </StatSection>
                                <StatSection>
                                    <span>Shared</span>&nbsp;
                                    <span>298</span>
                                </StatSection>
                                <StatSection>
                                    <span>Paid to You</span>&nbsp;
                                    <span>Rs 1,100</span>
                                </StatSection>
                            </MemberStatsContainer>
                        )}
                        {isDropdownOpen && (
                            <>
                                {dataList &&
                                    dataList.map((userData) => (
                                        <>
                                            <Layer
                                                onClick={() =>
                                                    handleLayerClick(
                                                        userData.name
                                                    )
                                                }
                                            >
                                                <div>
                                                    {userData.layerconfig &&
                                                        userData.layerconfig
                                                            .length > 0 && (
                                                            <button
                                                                style={{
                                                                    borderRadius:
                                                                        "25px",
                                                                    height: "25px",
                                                                    width: "25px",
                                                                    border: "1px solid white",
                                                                    backgroundColor:
                                                                        "#0099ff",
                                                                    color: "white",
                                                                    cursor: "pointer",
                                                                }}
                                                                // onClick={() =>
                                                                //     handleLayerClick(
                                                                //         userData.name
                                                                //     )
                                                                // }
                                                            >
                                                                {/* {selectedReferralData ===
                                                        userData.name
                                                            ? "-"
                                                            : "+"} */}
                                                                {selectedReferralData.includes(
                                                                    userData.name
                                                                )
                                                                    ? "-"
                                                                    : "+"}
                                                            </button>
                                                        )}
                                                </div>
                                                {/* {userData.layerconfig &&
                                            userData.layerconfig.length > 0 && (
                                                <button
                                                    onClick={() =>
                                                        handleLayerClick(
                                                            userData.name
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            )} */}
                                                {/* <div> */}
                                                <Image
                                                    src="/profile.jpg"
                                                    alt="Vinod Joy"
                                                />
                                                {/* </div> */}

                                                <Title>{userData.name}</Title>
                                                <Description>
                                                    {userData.count}
                                                </Description>
                                                <Description>
                                                    {userData.price}
                                                </Description>
                                                <Description>
                                                    {userData.member}
                                                </Description>
                                            </Layer>

                                            {/* {userData.layerconfig &&
                                        selectedReferralData ===
                                            userData.name &&
                                        userData.layerconfig.map((referral) => ( */}
                                            {userData.layerconfig &&
                                                selectedReferralData.includes(
                                                    userData.name
                                                ) &&
                                                userData.layerconfig.map(
                                                    (referral) => (
                                                        <>
                                                            <Layer
                                                                style={{
                                                                    borderColor:
                                                                        "blue",
                                                                    backgroundColor:
                                                                        "#ffffff",
                                                                }}
                                                                onClick={() =>
                                                                    handleLayerClick(
                                                                        referral.name
                                                                    )
                                                                }
                                                            >
                                                                {/* {referral.referraldata && ( */}
                                                                {referral.layerone &&
                                                                    referral
                                                                        .layerone
                                                                        .referraldatas
                                                                        .length >
                                                                        0 && (
                                                                        <button
                                                                            style={{
                                                                                borderRadius:
                                                                                    "25px",
                                                                                height: "25px",
                                                                                width: "25px",
                                                                                border: "1px solid white",
                                                                                backgroundColor:
                                                                                    "#0099ff",
                                                                                color: "white",
                                                                                cursor: "pointer",
                                                                            }}
                                                                            // onClick={() =>
                                                                            //     handleLayerClick(
                                                                            //         referral.name
                                                                            //     )
                                                                            // }
                                                                        >
                                                                            {selectedReferralData.includes(
                                                                                referral.name
                                                                            )
                                                                                ? "-"
                                                                                : "+"}
                                                                        </button>
                                                                    )}
                                                                {/* <div> */}
                                                                <Image
                                                                    src="/profile.jpg"
                                                                    alt="Vinod Joy"
                                                                />
                                                                {/* </div> */}

                                                                <Title>
                                                                    {
                                                                        referral.name
                                                                    }
                                                                </Title>
                                                                <Description>
                                                                    {
                                                                        referral.count
                                                                    }
                                                                </Description>
                                                                <Description>
                                                                    {
                                                                        referral.price
                                                                    }
                                                                </Description>
                                                                <Description>
                                                                    {
                                                                        referral.member
                                                                    }
                                                                </Description>
                                                            </Layer>

                                                            {referral.layerone &&
                                                                selectedReferralData.includes(
                                                                    referral.name
                                                                ) &&
                                                                referral.layerone.referraldatas.map(
                                                                    (
                                                                        innerReferral
                                                                    ) => (
                                                                        <Layer
                                                                            style={{
                                                                                borderColor:
                                                                                    "blue",
                                                                                backgroundColor:
                                                                                    "#ffffff",
                                                                            }}
                                                                        >
                                                                            <Image
                                                                                src="/profile.jpg"
                                                                                alt="Vinod Joy"
                                                                            />

                                                                            <Title>
                                                                                {
                                                                                    innerReferral.name
                                                                                }
                                                                            </Title>
                                                                            <Description>
                                                                                {
                                                                                    innerReferral.count
                                                                                }
                                                                            </Description>
                                                                            <Description>
                                                                                {
                                                                                    innerReferral.price
                                                                                }
                                                                            </Description>
                                                                            <Description>
                                                                                {
                                                                                    innerReferral.member
                                                                                }
                                                                            </Description>
                                                                        </Layer>
                                                                    )
                                                                )}
                                                        </>
                                                    )
                                                )}
                                        </>
                                    ))}
                            </>
                        )}
                        {/* {isDropdownOpen && (
                    <>
                        {selectedReferralData && (
                            <div>
                                {/* Display the selected referral data here */}
                        {/* {selectedReferralData.map((data) => (
                                    <Layer key={data.name}>
                                        <Image
                                            src="/profile.jpg"
                                            alt="Vinod Joy"
                                        />
                                        <Title>{data.name}</Title>
                                        <Description>{data.count}</Description>
                                        <Description>{data.price}</Description>
                                        <Description>{data.member}</Description>
                                    </Layer>
                                ))}
                            </div>
                        )}
                    </>
                )} */}
                    </Card>
                )}
            </>

            {showModal && (
                <Rewardpaymentmodal handleCloseModal={handleCloseModal} />
            )}
        </Container>
    );
};

export default ReferralPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = styled.div`
    width: 90%;
    /* height: 60vh; */
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 30px;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between; /* Adjusted */
    align-items: center;
    margin-bottom: 20px; /* Added */
`;

const ProfilePicture = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-left: 120px;
    background-color: #ccc;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 650px;
`;

const Name = styled.h2`
    margin: 0;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px; /* Added */
`;

const Button = styled.button`
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    /* padding: 8px 16px; */
    padding: 10px 20px; /* Adjusted padding for increased height and width */

    margin-right: 10px;
    cursor: pointer;
`;

const MessageButton = styled(Button)`
    padding: 18px 30px;
    border-radius: 50px;
`;

const RewardButton = styled(Button)`
    padding: 18px 30px;
    border-radius: 50px;
`;

const MemberStatsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    align-items: center;

    /* margin-top: 10px; */
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StatSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
`;

const DropdownLabel = styled.span`
    font-weight: bold;
`;

const Dropdown = styled.select`
    /* padding: 8px; */
    /* border-radius: 4px; */
`;

const Layer = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
    margin-left: 150px;
    align-items: center; /* Vertically center align items */
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 16px;
`;
const Image = styled.img`
    width: 50px; /* Adjust the width as needed */
    height: 50px; /* Adjust the height as needed */
    border-radius: 50%;
    /* margin-right: -150px; Adjust the spacing between image and text */
    background-color: #ccc;
    /* margin-right: -140px; */
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 111%;
    height: 110%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
`;
const CancelButton = styled.button`
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`;

const ConfirmButton = styled.button`
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`;
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
`;
const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: #999;
    font-size: 18px;
    cursor: pointer;
    float: right;
`;
const AmountInput = styled.input`
    width: 50%;
    padding: 8px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Label = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
const Rightsection = styled.div`
    /* margin-left: 100px; */
    display: flex;
    justify-content: flex-end;
`;
const RewardSection = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

const CurrencyLabel = styled.label`
    margin-left: 10px;
`;

const RewardTypeSelect = styled.select`
    margin-top: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const DropdownToggle = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
`;

const DropdownContent = styled.div`
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    /* Add additional styles as needed */
`;

const DropdownItem = styled.div`
    padding: 5px 0;
    cursor: pointer;
    /* Add additional styles as needed */
`;
