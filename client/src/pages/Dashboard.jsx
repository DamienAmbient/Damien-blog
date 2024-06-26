import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import DashComments from "../components/DashComments";
import DashPosts from "../components/DashPosts";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
import DashUsers from "../components/DashUsers";

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get("tab");
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-56">
                {/* Sidebar */}
                <DashSidebar />
            </div>
            {/*profile*/} {tab === "profile" && <DashProfile></DashProfile>}
            {tab === "posts" && <DashPosts></DashPosts>}
            {tab === "users" && <DashUsers></DashUsers>}
            {tab === "comments" && <DashComments></DashComments>}
            {tab === "dash" && <DashboardComponent></DashboardComponent>}
        </div>
    );
}
