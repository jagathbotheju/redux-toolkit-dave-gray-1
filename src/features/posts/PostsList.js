import { useSelector } from "react-redux";
import { Stack, Typography, Box, Card, CardContent } from "@mui/material";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  //const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <Card key={post.id}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body1">
          {post.content.substring(0, 100)}
        </Typography>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </CardContent>
    </Card>
  ));

  return (
    <>
      <Stack m={2} spacing={2}>
        <Typography variant="h4">Posts</Typography>
        <Stack spacing={2} direction="column-reverse">
          {renderPosts}
        </Stack>
      </Stack>
    </>
  );
};

export default PostsList;
