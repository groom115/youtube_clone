import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ Videos }) => {
  console.log(Videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {Videos.map((video, idx) => {
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetails={video} />}
        </Box>;
      })}
    </Stack>
  );
};

export default Videos;
