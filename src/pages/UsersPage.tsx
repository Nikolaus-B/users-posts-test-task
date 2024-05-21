import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/users/usersThunk";
import { UsersTable } from "../components/UsersTable/UsersTable";

export default function UsersPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <UsersTable />
    </>
  );
}
