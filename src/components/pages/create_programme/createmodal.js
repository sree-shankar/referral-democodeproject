import React from "react";
import styled from "styled-components";

const Createmodal = ({ onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <p>Success</p>
                    <CloseButton onClick={onClose}>×</CloseButton>{" "}
                </ModalHeader>
                <p>Program created successfully!</p>
                <ModalButtonContainer>
                    <CenteredModalButton onClick={onClose}>
                        OK
                    </CenteredModalButton>
                </ModalButtonContainer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Createmodal;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center; /* Center align contents */
`;

const ModalHeader = styled.div`
    background-color: #0056b3;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 35px;
`;

const CloseButton = styled.button`
    /* background: none;
    border: none;
    color: white;
    cursor: pointer; */
    border: none;
    color: white;
    cursor: pointer;
    background-color: transparent;
    color: #999;
    font-size: 25px;
`;

const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const ModalButton = styled.button`
    background-color: #0056b3;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const CenteredModalButton = styled(ModalButton)`
    margin-top: 20px; /* Add some top margin for spacing */
`;
