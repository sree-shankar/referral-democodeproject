import React from "react";
import Dashboard from "./dashboard";
import Level from "./levelproducts";

const DashboardContent = () => {
    return (
        <div
            style={{
                // marginTop: "55px",
                paddingRight: "33px",
                // position: "absolute",
                right: "15px",
                left: "15px",
                display: "flex",
                // margin: "25px 20px",
                // flexDirection: "row",
                justifyContent: "space-between",
                // width: "100%",
                // columnGap: "1rem",
            }}
        >
            <Dashboard />
            <Level />
        </div>
    );
};

export default DashboardContent;
