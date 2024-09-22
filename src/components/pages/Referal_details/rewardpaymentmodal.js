import React from "react";
import styled from "styled-components";

const Rewardpaymentmodal = ({ handleCloseModal }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <HeaderText>Reward Payment</HeaderText>
                    <CloseButton onClick={handleCloseModal}>×</CloseButton>{" "}
                </ModalHeader>
                <ModalBody>
                    <InfoSection>
                        <InfoText>Transaction ID: 12874687746284</InfoText>
                        <InfoText> Date&Time: 01 Aug 2023, 17:00</InfoText>
                        <InfoText>Pay to: Shakir Mohammed</InfoText>
                        <InfoText>From: HCEL Brand Admin</InfoText>
                    </InfoSection>
                    <RewardSection>
                        <Label>Amount</Label>
                        <AmountInput type="number" />{" "}
                        <CurrencyLabel>Rupees</CurrencyLabel>
                        <Label>Reward Type</Label>
                        <RewardTypeSelect>
                            <option value="option1">Paytm</option>
                            <option value="option2">Amazon Pay</option>
                            <option value="option3">DRT|NEFT</option>
                            <option value="option4">Brand Benefits</option>
                        </RewardTypeSelect>
                    </RewardSection>
                </ModalBody>
                <Footer>
                    <CancelButton onClick={handleCloseModal}>
                        Cancel
                    </CancelButton>
                    <ConfirmButton>Confirm</ConfirmButton>
                </Footer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Rewardpaymentmodal;

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
    padding: 0px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    /* width: 100%; */
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

const HeaderText = styled.p`
    margin: 0;
    font-size: 18px;
`;

const CloseButton = styled.button`
    border: none;
    color: white;
    cursor: pointer;
    background-color: transparent;
    font-size: 25px;
`;

const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InfoSection = styled.div`
    flex: 1;
    padding: 20px;
`;

const InfoText = styled.p`
    margin: 0;
    margin-bottom: 10px;
`;

const RewardSection = styled.div`
    /* flex: 1;
    padding: 20px; */
    margin-top: 20px;
    margin-left: 150px; /* Add margin to the right side */
    /* padding: 20px; */
    /* border: 1px solid #ccc;
    border-radius: 4px; */
    flex: 1;
`;

const Label = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

const AmountInput = styled.input`
    width: 50%;
    padding: 8px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
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

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 40px;
    margin-right: 20px; /* Add margin to the right side */
    margin-bottom: 20px; /* Add margin to the bottom */
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
