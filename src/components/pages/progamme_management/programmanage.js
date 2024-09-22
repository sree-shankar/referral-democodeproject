import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProgramManagementComponent = () => {
    const navigate = useNavigate();

    const Naviatepage = () => {
        navigate("/create-program");
    };
    return (
        <Container>
            <TopSection>
                <Title>Program Management</Title>
                <Button onClick={Naviatepage}>Create</Button>
            </TopSection>
            <RewardTitle>Rewards</RewardTitle>
            <CardSection>{/* Add your card content here */}</CardSection>
        </Container>
    );
};

export default ProgramManagementComponent;

const Container = styled.div`
    display: flex;
    flex-direction: column; /* Arrange children in a column */
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #003d80;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const CardSection = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
`;

const Button = styled.button`
    background-color: #0056b3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #007bff; /* Change the background color on hover */
    }
`;
const RewardTitle = styled.h3`
    margin-top: 20px;
    padding: 20px;
`;
