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
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      console.log(title, content);
      dispatch(
        postAdded({
          title,
          content,
          userId
        })
      );
    }

    setTitle("");
    setContent("");
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
