// component
import ProfileBasicInfo from "./../../../../shared/ProfileBasicInfo/ProfileBasicInfo";

// redux
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { profileData } = useSelector((store) => store.auth);

  return (
    <div className="space-y-sectionGapMd">
      {profileData && <ProfileBasicInfo profileData={profileData} />}
    </div>
  );
};

export default AdminHome;
