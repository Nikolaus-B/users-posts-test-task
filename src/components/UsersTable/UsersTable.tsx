import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUsers } from "../../redux/users/usersSelectors";
import { useNavigate } from "react-router-dom";
import { fetchUserPosts } from "../../redux/posts/postsThunk";

export const UsersTable = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPostsButtonClick = (userId: number) => {
    dispatch(fetchUserPosts(userId));
    navigate("/posts");
  };

  return (
    <TableContainer marginTop={30} maxWidth="100%">
      <Table variant="simple">
        <TableCaption>Users</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
            <Th>Website</Th>
            <Th>Company</Th>
            <Th>Posts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </Td>
                <Td>{user.address.city}</Td>
                <Td>
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </Td>
                <Td>
                  <a href={user.website}>{user.website}</a>
                </Td>
                <Td>{user.company.name}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    variant="link"
                    onClick={() => onPostsButtonClick(user.id)}
                  >
                    Posts
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
