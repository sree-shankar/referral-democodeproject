import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Createmodal from "./createmodal";

const ProgramComponent = () => {
    const [status, setStatus] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const [image, setImage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPaymentType, setSelectedPaymentType] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleStatusToggle = () => {
        setStatus((prevStatus) => !prevStatus);
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setHighlight(true);
    };

    const handleDragLeave = () => {
        setHighlight(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setHighlight(false);

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
                formik.setFieldValue("image", e.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please drop an image file.");
        }
    };
    const handleImageClick = () => {
        // Open file input when the image is clicked
        const fileInput = document.getElementById("fileInput");
        fileInput.click();
    };
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
                formik.setFieldValue("image", e.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please select an image file.");
        }
    };

    const navigate = useNavigate();

    const previousNaviate = () => {
        navigate("/program-management");
    };

    const validationSchema = Yup.object().shape({
        price: Yup.number()
            .typeError("* Price must be a number")
            .required("*Price is required"),
        title: Yup.string().required("* Title is required"),
        SearchProduct: Yup.string().required("* Product is required"),
        description: Yup.string().required("* Description is required"),
        startDate: Yup.string().required("* Startdate is required"),
        endDate: Yup.string().required("* Enddate is required"),
        paymentType: Yup.string().required(
            "* Please select at least one payment type"
        ),
        image: Yup.mixed().required("* Image is required"),
        // image: Yup.mixed().test(
        //     "required",
        //     "* Image is required",
        //     (value) => !!value
        // ),

        // Add validation rules for other fields
    });

    const formik = useFormik({
        initialValues: {
            price: "",
            title: "",
            SearchProduct: "",
            description: "",
            startDate: "",
            endDate: "",
            paymentType: "",
            image: "",

            // Initialize other fields here
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log("createform data", values);
            handleCancelClick();
            handlePublishClicked();
        },
    });

    const handlePaymentTypeChange = (event) => {
        setSelectedPaymentType(event.target.value);
        formik.setFieldValue("paymentType", event.target.value);
    };

    const handleCancelClick = () => {
        // Reset the form values to their initial state
        setSelectedPaymentType();

        setImage();
        formik.resetForm();
    };

    // const handlePublishClick = () => {
    //     // Get the values of the form fields
    //     const price = formik.values.price;
    //     const title = formik.values.title;
    //     const searchProduct = formik.values.SearchProduct;
    //     const description = formik.values.description;
    //     const image = formik.values.image;
    //     const startDate = formik.values.startDate;
    //     const endDate = formik.values.endDate;
    //     const paymentType = formik.values.paymentType;

    //     // Store the values in local storage
    //     localStorage.setItem("price", price);
    //     localStorage.setItem("title", title);
    //     localStorage.setItem("searchProduct", searchProduct);
    //     localStorage.setItem("description", description);
    //     localStorage.setItem("image", image);
    //     localStorage.setItem("startDate", startDate);
    //     localStorage.setItem("endDate", endDate);
    //     localStorage.setItem("paymentType", paymentType);
    // };

    // useEffect(() => {
    //     // Convert form data to JSON string before storing
    //     const formData = JSON.stringify(formik.values);
    //     localStorage.setItem("programFormData", formData);
    // }, [formik.values]);

    const handlePublishClicked = () => {
        setLoading(true); // Set loading to true when the button is clicked

        // const formData = JSON.stringify(formik.values);
        // localStorage.setItem("programFormData", formData);
        // setShowSuccessModal(true); // Show the success modal

        const formData = formik.values;

        // Retrieve existing data from local storage or initialize an empty array
        const existingData =
            JSON.parse(localStorage.getItem("publishedPosts")) || [];

        // Add the new form data to the array
        existingData.push(formData);

        // Store the updated data in local storage
        localStorage.setItem("publishedPosts", JSON.stringify(existingData));
        setTimeout(() => {
            setShowSuccessModal(true); // Show the success modal
            setLoading(false);
        }, 1000); // Replace 2000 with the actual duration of your operation
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false); // Close the success modal
    };

    return (
        <Container>
            <Topsection>
                <Title>Create Programme</Title>
                <RightSection>
                    <StatusLabel>Status:</StatusLabel>
                    <ToggleSwitch>
                        <CheckboxInput
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        <Slider isChecked={isChecked} />
                    </ToggleSwitch>
                    <ButtonContainer>
                        <CancelButtoned onClick={previousNaviate}>
                            Cancel
                        </CancelButtoned>
                        <PublishButtoned>Publish</PublishButtoned>
                    </ButtonContainer>
                </RightSection>
            </Topsection>
            <LeftSection>
                <Card>
                    <form onSubmit={formik.handleSubmit}>
                        <Content>
                            <Label>
                                Price <RedStar>*</RedStar>
                            </Label>
                            <PriceInput
                                type="number"
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.price && formik.errors.price
                                }
                            />
                            {formik.touched.price && formik.errors.price ? (
                                <ErrorMessage>
                                    {formik.errors.price}
                                </ErrorMessage>
                            ) : null}
                            <Label>
                                Title of Programme <RedStar>*</RedStar>
                            </Label>
                            <TitleInput
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.title && formik.errors.title
                                }
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <ErrorMessage>
                                    {formik.errors.title}
                                </ErrorMessage>
                            ) : null}
                            <Label>
                                Search Product <RedStar>*</RedStar>
                            </Label>
                            <SearchInput
                                type="text"
                                placeholder="Enter product name with brand to search here..."
                                name="SearchProduct"
                                value={formik.values.SearchProduct}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.SearchProduct &&
                                    formik.errors.SearchProduct
                                }
                            />
                            {formik.touched.SearchProduct &&
                            formik.errors.SearchProduct ? (
                                <ErrorMessage>
                                    {formik.errors.SearchProduct}
                                </ErrorMessage>
                            ) : null}
                            <Label>
                                Description of Programme <RedStar>*</RedStar>
                            </Label>
                            <DescriptionInput
                                type="text"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.description &&
                                    formik.errors.description
                                }
                            />
                            {formik.touched.description &&
                            formik.errors.description ? (
                                <ErrorMessage>
                                    {formik.errors.description}
                                </ErrorMessage>
                            ) : null}
                            <Topupload>
                                <Label>
                                    Upload Images <RedStar>*</RedStar>
                                </Label>
                                <Topright>
                                    <Uploadcontainer>
                                        <UploadButton>Upload</UploadButton>
                                    </Uploadcontainer>
                                </Topright>
                            </Topupload>

                            <DropZone
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={highlight ? "highlight" : ""}
                                onClick={handleImageClick}
                                error={
                                    formik.touched.image && formik.errors.image
                                }
                            >
                                {!image ? (
                                    <p>Drag and Drop the Image file</p>
                                ) : (
                                    <img
                                        src={image}
                                        width={300}
                                        alt="Uploaded"
                                    />
                                )}
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    onChange={handleFileInputChange}
                                />
                            </DropZone>
                            {formik.touched.image && formik.errors.image ? (
                                <ErrorMessage>
                                    {formik.errors.image}
                                </ErrorMessage>
                            ) : null}
                            <Label>
                                Configure Date <RedStar>*</RedStar>
                            </Label>
                            <Configurecontainer>
                                <StartDateLabel>Start Date</StartDateLabel>
                                <StartDateInput
                                    type="date"
                                    name="startDate"
                                    value={formik.values.startDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.startDate &&
                                        formik.errors.startDate
                                    }
                                />
                                {formik.touched.startDate &&
                                formik.errors.startDate ? (
                                    <ErrorMessage>
                                        {formik.errors.startDate}
                                    </ErrorMessage>
                                ) : null}
                                <EndDateLabel>End Date</EndDateLabel>
                                <EndDateInput
                                    type="date"
                                    name="endDate"
                                    value={formik.values.endDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.endDate &&
                                        formik.errors.endDate
                                    }
                                />
                                {formik.touched.endDate &&
                                formik.errors.endDate ? (
                                    <ErrorMessage>
                                        {formik.errors.endDate}
                                    </ErrorMessage>
                                ) : null}
                            </Configurecontainer>
                            <RewardConfigureLabel>
                                Reward Configure <RedStar>*</RedStar>
                            </RewardConfigureLabel>
                            <Checkboxcontainer>
                                {/* <CheckboxLabel>
                                    <input type="checkbox" name="paymentType" />{" "}
                                    Paytm
                                </CheckboxLabel> */}
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        name="paymentType"
                                        value="Paytm"
                                        checked={
                                            selectedPaymentType === "Paytm"
                                        }
                                        onChange={handlePaymentTypeChange}
                                    />
                                    Paytm
                                </CheckboxLabel>
                                {/* <CheckboxLabel>
                                    <input type="checkbox" name="paymentType" />{" "}
                                    Amazon Pay
                                </CheckboxLabel> */}
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        name="paymentType"
                                        value="Amazon Pay"
                                        checked={
                                            selectedPaymentType === "Amazon Pay"
                                        }
                                        onChange={handlePaymentTypeChange}
                                    />
                                    Amazon Pay
                                </CheckboxLabel>

                                {/* <CheckboxLabel>
                                    <input type="checkbox" name="paymentType" />{" "}
                                    DBT/NEFT
                                </CheckboxLabel>
                                <CheckboxLabel>
                                    <input type="checkbox" name="paymentType" />{" "}
                                    Brand Benefits
                                </CheckboxLabel> */}
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        name="paymentType"
                                        value="DBT/NEFT"
                                        checked={
                                            selectedPaymentType === "DBT/NEFT"
                                        }
                                        onChange={handlePaymentTypeChange}
                                    />
                                    DBT/NEFT
                                </CheckboxLabel>
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        name="paymentType"
                                        value="Brand Benefits"
                                        checked={
                                            selectedPaymentType ===
                                            "Brand Benefits"
                                        }
                                        onChange={handlePaymentTypeChange}
                                    />
                                    Brand Benefits
                                </CheckboxLabel>
                                {formik.errors.paymentType ? (
                                    <ErrorMessage>
                                        {formik.errors.paymentType}
                                    </ErrorMessage>
                                ) : null}
                            </Checkboxcontainer>
                            {/* <Topsection> */}
                        </Content>

                        <Footersection>
                            <RightSide>
                                <CancelButton
                                    type="reset"
                                    onClick={handleCancelClick}
                                >
                                    Cancel
                                </CancelButton>
                                <SaveDraftButton>Save as Draft</SaveDraftButton>
                                <PublishButton
                                    type="submit"
                                    // onClick={handlePublishClick}
                                >
                                    {/* Publish */}
                                    <div>
                                        {loading ? "Publishing..." : "Publish"}
                                    </div>
                                    <div style={{ marginLeft: "3px" }}>
                                        {loading && <Loader />}
                                    </div>
                                </PublishButton>
                            </RightSide>
                        </Footersection>
                        {/* </Topsection> */}
                        {showSuccessModal && (
                            <Createmodal onClose={handleCloseSuccessModal} />
                        )}
                    </form>
                </Card>
            </LeftSection>
        </Container>
    );
};

export default ProgramComponent;

const Content = styled.div`
    /* margin-left: 150px; */
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const LeftSection = styled.div`
    flex: 10;
    padding: 20px;
`;

const CancelButton = styled.button`
    background-color: gray;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #007bff;
    }
`;

const PublishButton = styled.button`
    background-color: #0056b3;
    display: flex;
    align-items: flex-end;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #007bff;
    }
`;

const Card = styled.div`
    background-color: #ffffff;
    /* border: 1px solid #ccc; */
    border: 2px dashed #ccc;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
`;

const PriceInput = styled(Input)`
    width: 15%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const TitleInput = styled(Input)`
    width: 95%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const SearchInput = styled(Input)`
    width: 95%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const DescriptionInput = styled.textarea`
    width: 95%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    resize: none;
    height: 150px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const UploadButton = styled.button`
    background-color: gray;
    color: white;

    padding: 10px 20px;
    margin-right: 37px;
    border: none;
    cursor: pointer;

    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
        background-color: #007bff;
    }
`;

const ConfigureDateLabel = styled.div`
    font-weight: bold;
    margin-top: 20px;
`;

const StartDateLabel = styled(Label)`
    align-items: center;
    padding: 10px;
`;

const StartDateInput = styled(Input)`
    width: 10%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const EndDateLabel = styled(Label)`
    align-items: center;
    padding: 10px;
`;

const EndDateInput = styled(Input)`
    width: 10%;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};

    border-radius: 4px;
    margin-bottom: 15px;
    outline: none;
    &:focus {
        border: 1px solid #4f50e4;
    }
`;

const RewardConfigureLabel = styled(Label)`
    margin-top: 20px;
`;

const CheckboxLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const SaveDraftButton = styled(CancelButton)`
    background-color: orange;
    margin-top: auto;
    border-radius: 5px;
`;

const Topsection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #003d80;
`;

const StatusLabel = styled.span`
    font-size: 16px;
    margin-right: 0px;
`;

const ToggleSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccc; */
    background-color: ${({ isChecked }) => (isChecked ? "#00cc00" : "#ccc")};

    border-radius: 20px;

    &:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        /* left: 3px; */
        left: ${({ isChecked }) => (isChecked ? "5px" : "2px")};
        bottom: 3px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
    }
`;

const CheckboxInput = styled.input`
    display: none;

    &:checked + ${Slider}:before {
        transform: translateX(20px);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
`;

const Button = styled.button`
    background-color: #0056b3;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #007bff;
    }
`;
const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Checkboxcontainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 70px;
`;

const Configurecontainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;
const Footersection = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    padding: 20px;
`;

// const DropZone = styled.div`
//     border: 2px dashed #ccc;
//     padding: 20px;
//     text-align: center;
//     cursor: pointer;
//     width: 50%;
// `;

const DropZone = styled.div`
    /* border: 2px dashed #ccc; */
    border: 2px dashed ${(props) => (props.error ? "red" : "#ccc")};

    padding: 20px;
    text-align: center;
    cursor: pointer;
    height: 150px; /* Increase the height */
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 15px;
    background-color: #f0f0f0;

    &.highlight {
        background-color: #f0f0f0;
        border: 2px dashed #4f50e4;
    }

    img {
        /* max-width: 100%;
        max-height: 100%; */
    }
`;
const CancelButtoned = styled.button`
    background-color: gray;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #007bff;
    }
`;
const PublishButtoned = styled.button`
    background-color: #0056b3;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #007bff;
    }
`;
const Topupload = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
`;
const Topright = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Uploadcontainer = styled.div`
    display: flex;
    align-items: center;
`;
const ErrorMessage = styled.div`
    color: red;
    /* Other styles */
`;
const RedStar = styled.span`
    color: red;
    /* margin-left: 0px; */
    font-size: larger;
`;
const Loader = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: spin 2s linear infinite;
    margin-right: 8px; /* Add spacing between loader and button text */

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
