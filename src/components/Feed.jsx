import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [Video, setVideo] = useState(null);
  useEffect(() => {
    //setVideo(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideo(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid white",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          copyright 2022 JSM media
        </Typography>
      </Box>
      <Box sx={{ p: 2, height: "90vh", overflow: "auto" }}>
        <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>
      </Box>
      <Videos Videos={Video} />
    </Stack>
  );
};

export default Feed;
