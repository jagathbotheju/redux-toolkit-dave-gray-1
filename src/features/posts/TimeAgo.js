import { Typography } from "@mui/material";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <>
      <Typography variant="body1">{timeAgo}</Typography>
    </>
  );
};

export default TimeAgo;
