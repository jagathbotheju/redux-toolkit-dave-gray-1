import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography, Box, Card, CardContent } from "@mui/material";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts
} from "./postsSlice";

import { useEffect } from "react";
import PostItem from "./PostItem";

const PostsList = () => {
  const dispatch = useDispatch();
  //const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <Typography variant="h4">Loading...</Typography>;
  } else if (postsStatus === "succeeded") {
    content = posts.map((post) => <PostItem key={post.id} post={post} />);
  } else if (postsStatus === "failed") {
    content = <Typography variant="h6">{error}</Typography>;
  }

  console.log(postsStatus);
  //const onePost=posts[0];

  if (postsStatus === "succeeded") {
    return (
      <>
        <Stack m={2} spacing={2}>
          <Typography variant="h4">Posts</Typography>
          <Stack spacing={2} direction="column-reverse">
            {content}
            {/* <PostItem post={onePost}/> */}
            {/* {posts.map((post) => <PostItem key={post.id} post={post} />)} */}
          </Stack>
        </Stack>
      </>
    );
  }
};

export default PostsList;
