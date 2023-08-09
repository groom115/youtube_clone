import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setselectedCategory }) => (
  <Stack
    flexDirection="row"
    sx={{
      overflowY: "auto",
      flexDirection: { md: "column" },
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setselectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#F31503",
          color: "white",
        }}
        key={category.color}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "10px",
          }}
        >
          {category.icon}
        </span>
        <span style={{}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
