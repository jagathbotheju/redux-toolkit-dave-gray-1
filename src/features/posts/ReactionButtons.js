import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoodIcon from "@mui/icons-material/Mood";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Box, IconButton, Button } from "@mui/material";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Box>
        <Button
          startIcon={<ThumbUpIcon sx={{ color: "magenta" }} />}
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: "thumbsUp"
              })
            )
          }
        >
          {post.reactions["thumbsUp"]}
        </Button>
        <Button
          startIcon={<MoodIcon sx={{ color: "darkorange" }} />}
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: "wow"
              })
            )
          }
        >
          {post.reactions["wow"]}
        </Button>
        <Button
          startIcon={<FavoriteIcon sx={{ color: "red" }} />}
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: "heart"
              })
            )
          }
        >
          {post.reactions["heart"]}
        </Button>
        <Button
          startIcon={<RocketLaunchIcon sx={{ color: "firebrick" }} />}
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: "rocket"
              })
            )
          }
        >
          {post.reactions["rocket"]}
        </Button>
        <Button
          startIcon={<CoffeeIcon sx={{ color: "deeppink" }} />}
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: "coffee"
              })
            )
          }
        >
          {post.reactions["coffee"]}
        </Button>
      </Box>
    </>
  );
};

export default ReactionButtons;
