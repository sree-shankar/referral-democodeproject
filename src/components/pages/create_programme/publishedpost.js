import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Publishedpost = () => {
    const [publishedPosts, setPublishedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     // Retrieve data from local storage
    //     const storedData = localStorage.getItem("publishedPosts");

    //     if (storedData) {
    //         const parsedData = JSON.parse(storedData);
    //         setPublishedPosts(parsedData);
    //     }
    // }, []);

    useEffect(() => {
        // Simulate fetching data with a setTimeout
        setTimeout(() => {
            // Retrieve data from local storage
            const storedData = localStorage.getItem("publishedPosts");

            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setPublishedPosts(parsedData);
            }

            // Set loading to false once data is fetched
            setIsLoading(false);
        }, 1000); // Simulated 2-second loading delay
    }, []);

    return (
        <div>
            <h2>Published Programs</h2>
            {/* {publishedPosts.length === 0 ? (
                <NoDataMessage>No published programs yet.</NoDataMessage>
            ) : ( */}

            {isLoading ? (
                <LoadingMessage>Loading...</LoadingMessage>
            ) : publishedPosts.length === 0 ? (
                <NoDataMessage>No published programs yet.</NoDataMessage>
            ) : (
                <Table>
                    <TableHead>
                        <tr>
                            <Th>SI.No</Th>
                            <Th>image</Th>
                            <Th>Price</Th>
                            <Th>Title</Th>
                            <Th>Product</Th>
                            <Th>Description</Th>
                            <Th>Start Date</Th>
                            <Th>End Date</Th>
                            <Th>Payment Type</Th>
                        </tr>
                    </TableHead>
                    <tbody>
                        {publishedPosts.map((program, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>
                                    <Img
                                        src={program.image}
                                        alt="Program Image"
                                    />
                                </Td>

                                <Td>{program.price}</Td>
                                <Td>{program.title}</Td>
                                <Td>{program.SearchProduct}</Td>
                                <Td>{program.description}</Td>
                                <Td>{program.startDate}</Td>
                                <Td>{program.endDate}</Td>
                                <Td>{program.paymentType}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {/* )} */}
        </div>
    );
};

export default Publishedpost;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    /* background-color: #f2f2f2; */
    padding: 8px;
    text-align: left;
`;

const Td = styled.td`
    padding: 8px;
    border-bottom: 1px solid #ddd;
`;

const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #e5e5e5;
    }
`;

const NoDataMessage = styled.div`
    text-align: center;
    padding: 16px;
`;

const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 25%;
`;

const TableHead = styled.thead`
    background-color: #0056b3; /* Set the background color for the thead */
    color: #fff;
`;

// const Tablebody = styled.tbody`
//     &:nth-child(even) {
//         background-color: #eeeeee;
//     }
// `;

const LoadingMessage = styled.div`
    text-align: center;
    padding: 16px;
    font-weight: bold;
`;
