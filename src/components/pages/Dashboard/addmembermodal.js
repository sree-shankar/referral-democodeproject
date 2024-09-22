// import React, { useState } from "react";
// import styled from "styled-components";

// const AddMemberModal = ({ onClose, onAddMember }) => {
//     const [memberName, setMemberName] = useState("");

//     const handleAddClick = () => {
//         if (memberName.trim() !== "") {
//             onAddMember(memberName);
//             setMemberName("");
//             onClose();
//         }
//     };

//     return (
//         // <ModalOverlay>
//         //     <ModalContent>
//         //         {/* <CloseButton onClick={onClose}>×</CloseButton> */}
//         //         <h2>Add Member</h2>
//         //         <InputContainer>
//         //             <Input
//         //                 type="text"
//         //                 value={memberName}
//         //                 onChange={(e) => setMemberName(e.target.value)}
//         //                 placeholder="Enter member name"
//         //             />
//         //         </InputContainer>
//         //         <ButtonContainer>
//         //             <CancelButton onClick={onClose}>Cancel</CancelButton>
//         //             <AddButton onClick={handleAddClick}>Add</AddButton>
//         //         </ButtonContainer>
//         //     </ModalContent>
//         // </ModalOverlay>

//         <ModalOverlay>
//             <ModalContent>
//                 <ModalHeader>
//                     <p>Addmember</p>
//                     {/* <CloseButton onClick={onClose}>×</CloseButton>{" "} */}
//                 </ModalHeader>
//                 <InputContainer>
//                     <Input
//                         type="text"
//                         value={memberName}
//                         onChange={(e) => setMemberName(e.target.value)}
//                         placeholder="Enter member name...."
//                     />
//                 </InputContainer>
//                 <ModalButtonContainer>
//                     <CancelButton onClick={onClose}>Cancel</CancelButton>
//                     <AddButton onClick={handleAddClick}>Add</AddButton>
//                 </ModalButtonContainer>
//             </ModalContent>
//         </ModalOverlay>
//     );
// };
// export default AddMemberModal;

// // const ModalOverlay = styled.div`
// //     position: fixed;
// //     top: 0;
// //     left: 0;
// //     width: 100%;
// //     height: 100%;
// //     background-color: rgba(0, 0, 0, 0.5);
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// // `;

// // const ModalContent = styled.div`
// //     background-color: white;
// //     padding: 20px;
// //     border-radius: 8px;
// //     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// //     width: 400px; /* Adjust the width as needed */
// // `;

// // const CloseButton = styled.button`
// //     /* position: absolute;
// //     top: 10px;
// //     right: 10px;
// //     border: none;
// //     background: none;
// //     font-size: 18px;
// //     cursor: pointer; */
// //     background-color: transparent;
// //     border: none;
// //     color: #999;
// //     font-size: 25px;
// //     cursor: pointer;
// //     float: right;
// // `;

// const InputContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 20px 0;
// `;

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 20px;
// `;

// const AddButton = styled.button`
//     background-color: #0056b3;
//     color: white;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     margin-left: 10px;
//     &:hover {
//         background-color: #007bff;
//     }
// `;

// const CancelButton = styled.button`
//     background-color: gray;
//     color: white;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
// `;
// const Input = styled.input`
//     padding: 10px;
//     margin-top: 15px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     width: 100%; /* Set the desired width */
//     height: 30px; /* Set the desired height */
//     /* outline: 1px solid #4f50e4; */
//     outline: none;
//     &:hover {
//         border: 1px solid #4f50e4; /* Change color on hover */
//     }
// `;

// const ModalOverlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 1000;
// `;

// const ModalContent = styled.div`
//     background-color: white;
//     width: 400px;
//     border-radius: 5px;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
//     text-align: center; /* Center align contents */
// `;

// const ModalHeader = styled.div`
//     background-color: #0056b3;
//     color: white;
//     padding: 10px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-top-left-radius: 5px;
//     border-top-right-radius: 5px;
//     height: 35px;
// `;

// const CloseButton = styled.button`
//     /* background: none; */
//     border: none;
//     color: white;
//     cursor: pointer;
//     background-color: transparent;
//     color: #999;
//     font-size: 25px;
// `;

// const ModalButtonContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 20px;
// `;

// const ModalButton = styled.button`
//     background-color: #007bff;
//     color: white;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
// `;

// const CenteredModalButton = styled(ModalButton)`
//     margin-top: 20px; /* Add some top margin for spacing */
// `;

import React, { useState } from "react";
import styled from "styled-components";

const AddMemberModal = ({ onClose, onAddMember }) => {
    // const [memberName, setMemberName] = useState("");
    // const [date, setDate] = useState("");
    // const [place, setPlace] = useState("");
    // const [referred, setReferred] = useState("");
    // const [shared, setShared] = useState("");
    // const [claimed, setClaimed] = useState("");
    // const [levelScore, setLevelScore] = useState("");
    // const [firstLevel, setFirstLevel] = useState("");
    // const [secondLevel, setSecondLevel] = useState("");
    // const [formData, setFormData] = useState({
    //     memberName: "",
    //     date: "",
    //     place: "",
    //     referred: "",
    //     shared: "",
    //     claimed: "",
    //     levelScore: "",
    //     firstLevel: "Level 1",
    //     secondLevel: "Level 1",
    // });

    // const handleAddClick = () => {
    //     if (memberName.trim() !== "") {
    //         onAddMember(
    //             memberName,
    //             date,
    //             place,
    //             referred,
    //             shared,
    //             claimed,
    //             levelScore,
    //             firstLevel,
    //             secondLevel
    //         );
    //         setMemberName("");
    //         setDate("");
    //         setPlace("");
    //         setReferred("");
    //         setShared("");
    //         setClaimed("");
    //         setLevelScore("");
    //         setFirstLevel("Level 1");
    //         setSecondLevel("Level 1");
    //         onClose();
    //     }
    // };

    const [memberData, setMemberData] = useState({
        memberName: "",
        date: "",
        place: "",
        referred: "",
        shared: "",
        claimed: "",
        levelScore: "",
        firstLevel: "",
        secondLevel: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMemberData({ ...memberData, [name]: value });
    };

    // const handleAddClick = () => {
    //     if (memberData.memberName.trim() !== "") {
    //         onAddMember(memberData);
    //         onClose();
    //     }
    // };

    const handleAddClick = () => {
        // Trim specific fields before checking memberName
        const trimmedMemberName = memberData.memberName.trim();
        const trimmedPlace = memberData.place.trim();
        const trimmeddate = memberData.date.trim();
        const trimmedReferred = memberData.referred.trim();
        const trimmedShared = memberData.shared.trim();
        const trimmedClaimed = memberData.claimed.trim();
        const trimmedLevelScore = memberData.levelScore.trim();
        const trimmedFirstLevel = memberData.firstLevel.trim();
        const trimmedSecondLevel = memberData.secondLevel.trim();

        if (
            (trimmedMemberName,
            trimmeddate,
            trimmedPlace,
            trimmedReferred,
            trimmedShared,
            trimmedClaimed,
            trimmedLevelScore,
            trimmedFirstLevel,
            trimmedSecondLevel !== "")
        ) {
            // Update memberData with trimmed values
            setMemberData({
                ...memberData,
                memberName: trimmedMemberName,
                date: trimmeddate,
                place: trimmedPlace,
                referred: trimmedReferred,
                shared: trimmedShared,
                claimed: trimmedClaimed,
                levelScore: trimmedLevelScore,
                firstLevel: trimmedFirstLevel,
                secondLevel: trimmedSecondLevel,
            });

            onAddMember(memberData);
            onClose();
        }
    };
    return (
        <ModalWrapper>
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>Add Member</ModalTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>
                <ModalContent>
                    <div>
                        <InputLabel>Name</InputLabel>
                        <Input
                            type="text"
                            name="memberName"
                            value={memberData.memberName}
                            // onChange={(e) => setMemberName(e.target.value)}
                            onChange={handleInputChange}
                            placeholder="Enter member name...."
                        />
                    </div>
                    <div>
                        <InputLabel>Date</InputLabel>
                        <Input
                            type="date"
                            name="date"
                            value={memberData.date}
                            onChange={handleInputChange}
                            // onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel>Place</InputLabel>
                        <Input
                            type="text"
                            placeholder="city"
                            name="place"
                            value={memberData.place}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <InputLabel>Referred</InputLabel>
                        <Input
                            type="number"
                            name="referred"
                            value={memberData.referred}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <InputLabel>Shared </InputLabel>
                        <Input
                            type="number"
                            name="shared"
                            value={memberData.shared}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <InputLabel>Claimed </InputLabel>
                        <Input
                            type="number"
                            name="claimed"
                            value={memberData.claimed}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <InputLabel>Level Score</InputLabel>
                        <Input
                            type="number"
                            name="levelScore"
                            value={memberData.levelScore}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <InputLabel>Level</InputLabel>
                        <Select
                            name="firstLevel"
                            value={memberData.firstLevel}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a level</option>
                            <option value="level 1">Level 1</option>
                            <option value="level 2">Level 2</option>
                        </Select>
                    </div>
                    <div>
                        <InputLabel>second level</InputLabel>
                        <Select
                            name="secondLevel"
                            value={memberData.secondLevel}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a level</option>
                            <option value="Level 1">Level 1</option>
                            <option value="level 2">level 2</option>
                        </Select>
                    </div>
                </ModalContent>
                <FooterSection>
                    <CancelButton onClick={onClose}>Cancel</CancelButton>
                    <AddButton onClick={handleAddClick}>Add</AddButton>
                </FooterSection>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default AddMemberModal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background: white;
    border-radius: 4px;
    width: 650px;
`;

const ModalHeader = styled.div`
    background-color: #003d80;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalTitle = styled.h2`
    margin: 0;
`;

const CloseButton = styled.button`
    border: none;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 25px;

    background-color: transparent;
    /* color: #999; */
`;

const ModalContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
`;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
// `;

const FooterSection = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    border-top: 1px solid #ccc;
`;

const CancelButton = styled.button`
    margin-right: 10px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    background-color: gray;
    color: white;
    border-radius: 4px;

    background-color: gray;
`;

const AddButton = styled.button`
    background-color: #003d80;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
`;

const InputLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding and border within the width */
    margin-bottom: 10px; /* Add margin to separate input elements */
    box-shadow: none; /* Remove any default box shadow if present */

    &:focus {
        outline: none; /* Remove the default focus outline */
        border-color: #007bff; /* Highlight border on focus */
    }
`;

const SelectLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding and border within the width */
    margin-bottom: 10px; /* Add margin to separate input elements */
    box-shadow: none; /* Remove any default box shadow if present */

    &:focus {
        outline: none; /* Remove the default focus outline */
        border-color: #007bff; /* Highlight border on focus */
    }
`;
