import React from "react";
import Navbar from "../components/Navbar/Navbar.js"
import Referral from "../components/Referral/Referral.js"
import HowItWorks from "../components/HowWorks/HowItWorks.js";


const Dashboard = () => {
    return <div>
        <Navbar />
        <Referral />
        <HowItWorks />
    </div>;
};

export default Dashboard;
