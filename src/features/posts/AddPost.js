import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
  MenuItem
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewPost({
            title,
            body: content,
            userId
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const userOptions = (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-users">Author</InputLabel>
        <Select
          labelId="select-users"
          value={userId}
          label="Author"
          onChange={(e) => setUserId(e.target.value)}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  console.log(userId);

  return (
    <>
      <Stack component="form" onSubmit={handleSubmit} m={2} spacing={2}>
        <Typography variant="h4">Add Post</Typography>
        <TextField
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Content"
          value={content}
          multiline
          minRows={3}
          onChange={(e) => setContent(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" type="submit" disabled={!canSave}>
            Add Post
          </Button>
          {userOptions}
        </Stack>
      </Stack>
    </>
  );
};

export default AddPost;
