import { Outlet } from "react-router-dom";
import SideNavigation from "../SideNavigation/SideNavigation";
import style from "/src/components/Dashboard/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.page}>
      <SideNavigation />
      <div className={style.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
