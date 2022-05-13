import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <>
      <Typography variant="body1">
        by {author ? author.name : "unknown author"}
      </Typography>
    </>
  );
};

export default PostAuthor;
