// react
import { useEffect } from "react";

// component
import UsersTable from "./UsersTable/UsersTable";

// hooks
import useAxios from "./../../../../../hooks/useAxios";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../../../../features/users/usersSlice";
import SectionHeading from "./../../../../shared/SectionHeading/SectionHeading";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(store => store.users);
  const { axiosCustom } = useAxios();

  useEffect(() => {
    axiosCustom.get("/users").then(res => dispatch(setUsers(res.data.users)));
  }, [axiosCustom, dispatch]);

  return (
    <div>
      <section>
        <SectionHeading text={"Current Users"} />
        <UsersTable users={users} />
      </section>
    </div>
  );
};

export default Users;
