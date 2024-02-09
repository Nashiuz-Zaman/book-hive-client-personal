// react
import { Outlet } from "react-router-dom";

// components
import AdminDashboardHeader from "../shared/AdminDashboardHeader/AdminDashboardHeader";
import DashboardFooter from "../shared/DashboardFooter/DashboardFooter";
import DashboardNav from "../shared/DashboardNav/DashboardNav";

// data
import { adminDashboardNavOptions } from "../../uiData/navigationOptions";

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <AdminDashboardHeader />

      <div className="grow grid grid-cols-1 xl:grid-cols-[20rem_1fr]">
        {/* navigation left side */}
        <div className="hidden xl:block bg-lightGray border-r border-lightBorder">
          <DashboardNav navOptions={adminDashboardNavOptions} />
        </div>

        {/* right side */}
        <div className="flex flex-col h-full">
          {/* page outlet */}
          <div className="h-[calc(100vh-11.0859375rem)] overflow-y-auto py-elementGapLg px-elementGapSm md:px-elementGapMd xl:px-elementGapLg">
            <Outlet />
          </div>

          {/* footer */}
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
