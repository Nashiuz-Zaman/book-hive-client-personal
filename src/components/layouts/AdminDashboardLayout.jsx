// react
import { Outlet } from "react-router-dom";

// components
import AdminDashboardHeader from "../shared/AdminDashboardHeader/AdminDashboardHeader";
import DashboardFooter from "../shared/DashboardFooter/DashboardFooter";

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <AdminDashboardHeader />

      <div className="grow grid grid-cols-1 xl:grid-cols-[20rem_1fr]">
        {/* navigation left side */}
        <div className="hidden xl:block bg-lightGray border-r border-lightBorder"></div>

        {/* dashboard page and footer */}
        <div className="flex flex-col h-full">
          <div className="h-[calc(100vh-11.75rem)] overflow-y-auto">
            <Outlet />
          </div>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
